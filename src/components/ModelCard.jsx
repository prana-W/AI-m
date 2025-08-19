import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ModelCard = ({ name, model, description }) => {
    if (name !== 'None')
        return (
            <Card className="h-105 flex flex-col hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex-shrink-0">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-semibold">
                            {name}
                        </CardTitle>
                        {model && (
                            <Badge
                                variant="secondary"
                                className="text-xs font-mono"
                            >
                                {model.split('/')[0]}
                            </Badge>
                        )}
                    </div>
                    {model && (
                        <CardDescription
                            className="font-mono text-sm px-2 py-1 rounded-md
                                bg-muted text-muted-foreground
                                dark:bg-muted/40 dark:text-foreground
                                border border-border mt-1.5"
                        >
                            {model}
                        </CardDescription>
                    )}
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </CardContent>
            </Card>
        );
};

export default ModelCard;
