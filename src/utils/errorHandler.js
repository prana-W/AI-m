import { toast } from 'sonner';

export default function handleError(context = '', error = '') {
    let message = 'Something went wrong!';

    if (error instanceof Error) {
        message = error.message;
    } else if (typeof error === 'string') {
        message = error;
    }

    console.error(`Error in ${context}:`, error);

    toast.error(message, {
        description: context ? `Context: ${context}` : undefined,
    });
}
