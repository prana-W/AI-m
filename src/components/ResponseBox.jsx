import React, { useState, useEffect } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import aiModelDetails from '@/constants/models.detail.js';
import MarkdownRenderer from '@/components/MarkdownRenderer.jsx';
import aiModelApi from '../aiModelApi/aiModelApi.js';

const ResponseBox = ({ prompt, index = 0 }) => {
    const [response, setResponse] = useState('');
    const [selectedModel, setSelectedModel] = useState(
        aiModelDetails[index]?.name,
    );
    const [isCopied, setIsCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChunk = (chunk) => {
        if (
            response === 'Waiting for response...' &&
            selectedModel !== 'None'
        ) {
            setResponse(chunk);
        }
        setResponse((prev) => prev + chunk);
    };

    const handleModelChange = (value) => {
        setResponse('');
        setSelectedModel(value);
    };

    const handleCopy = async () => {
        if (response) {
            try {
                await navigator.clipboard.writeText(response);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        }
    };

    useEffect(() => {
        if (prompt && selectedModel !== 'None') {
            setResponse('');
            aiModelApi({
                onChunk: handleChunk,
                prompt,
                modelName: selectedModel,
                onLoading: handleLoading,
            });
        }
    }, [prompt]);

    const handleLoading = (loadingState) => {
        setLoading(loadingState);
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader className="flex-shrink-0 pb-3">
                <div className="flex items-center justify-between gap-2">
                    <Select
                        defaultValue={aiModelDetails[index]?.name}
                        onValueChange={handleModelChange}
                    >
                        <SelectTrigger className="flex-1 h-7 text-xs">
                            <SelectValue placeholder="Select a model" />
                        </SelectTrigger>
                        <SelectContent>
                            {aiModelDetails.map((model) => (
                                <SelectItem
                                    key={model.model}
                                    value={model.name}
                                    className="text-xs"
                                >
                                    {model.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 flex-shrink-0"
                        onClick={handleCopy}
                        disabled={
                            !response || response === 'Waiting for response...'
                        }
                    >
                        {isCopied ? (
                            <Check className="h-3 w-3 text-green-600" />
                        ) : (
                            <Copy className="h-3 w-3" />
                        )}
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-hidden p-0">
                <div className="h-full overflow-y-auto px-4 py-3">
                    {loading ? (
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                    ) : (
                        <div className="text-sm whitespace-pre-wrap">
                            <MarkdownRenderer>
                                {response || ``}
                            </MarkdownRenderer>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ResponseBox;
