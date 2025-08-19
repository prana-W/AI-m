import aiModelDetails from '@/constants/models.detail.js';

export default function detectAIModelName(modelName) {
    return aiModelDetails[modelName];
}
