import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Key, Save, Check, BarChart3 } from 'lucide-react';

export default function ApiKeys() {
    const [openRouterApiKey, setOpenRouterApiKey] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [requestCount, setRequestCount] = useState(0);

    // Load data from localStorage on component mount
    useEffect(() => {
        const savedKey = localStorage.getItem('openrouter_api_key');
        const savedCount = localStorage.getItem('daily_request_count');
        const lastResetDate = localStorage.getItem('last_reset_date');
        const today = new Date().toDateString();

        // Reset count if it's a new day
        if (lastResetDate !== today) {
            localStorage.setItem('daily_request_count', '0');
            localStorage.setItem('last_reset_date', today);
            setRequestCount(0);
        } else {
            setRequestCount(parseInt(savedCount) || 0);
        }

        if (savedKey) {
            setOpenRouterApiKey(savedKey);
        }
    }, []);

    const handleSaveKey = () => {

            localStorage.setItem('openrouter_api_key', openRouterApiKey.trim() || '');
            setIsSaved(true);
            setTimeout(() => setIsSaved(false), 2000);

    };

    const handleKeyChange = (e) => {
        setOpenRouterApiKey(e.target.value);
        setIsSaved(false);
    };

    const maskApiKey = (key) => {
        if (!key) return '';
        if (key.length <= 8) return key;
        return (
            key.substring(0, 4) +
            '•'.repeat(key.length - 8) +
            key.substring(key.length - 4)
        );
    };

    return (
        <div className="h-full flex flex-col p-4 md:p-6 overflow-y-auto">
            <div className="flex-1 max-w-2xl mx-auto w-full space-y-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">API Key</h1>
                    <p className="text-muted-foreground">
                        Manage your OpenRouter API key to access multiple AI
                        models
                    </p>
                </div>

                <Card className="relative">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Key className="h-5 w-5 text-blue-600" />
                                <CardTitle className="text-lg">
                                    OpenRouter API Key
                                </CardTitle>
                            </div>
                            <Badge
                                variant="outline"
                                className="flex items-center space-x-1"
                            >
                                <BarChart3 className="h-3 w-3" />
                                <span>Today: {requestCount}</span>
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="openrouter-key">API Key</Label>
                            <div className="flex space-x-2">
                                <Input
                                    id="openrouter-key"
                                    type="password"
                                    value={openRouterApiKey}
                                    onChange={handleKeyChange}
                                    placeholder="sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                                    className="flex-1"
                                />
                                <Button
                                    onClick={handleSaveKey}
                                    disabled={
                                        isSaved
                                    }
                                    className="flex items-center space-x-1"
                                >
                                    {isSaved ? (
                                        <>
                                            <Check className="h-4 w-4" />
                                            <span>Saved</span>
                                        </>
                                    ) : (
                                        <>
                                            <Save className="h-4 w-4" />
                                            <span>Save</span>
                                        </>
                                    )}
                                </Button>
                            </div>
                            {openRouterApiKey && (
                                <p className="text-sm text-muted-foreground">
                                    Stored key: {maskApiKey(openRouterApiKey)}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                            <ExternalLink className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">
                                Get your API key from{' '}
                                <a
                                    href="https://openrouter.ai/settings/keys"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline font-medium"
                                >
                                    OpenRouter Dashboard
                                </a>
                            </span>
                        </div>

                        <div className="pt-4 border-t">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div className="text-sm text-muted-foreground">
                                    <p className="font-medium text-foreground mb-1">
                                        Privacy Notice
                                    </p>
                                    <p>
                                        Your API key is stored locally in your
                                        browser's localStorage and never leaves
                                        your device!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">
                            Request Statistics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                                Total requests made today
                            </span>
                            <Badge variant="secondary" className="font-mono">
                                {requestCount}
                            </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Counter resets daily at midnight
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
