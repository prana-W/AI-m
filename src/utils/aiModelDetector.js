import aiModelDetails from '@/constants/models.detail.js';

export default function detectAIModelName(modelName) {
    const requiredAIModel = aiModelDetails.filter(
        (aiModel) => aiModel.name === modelName,
    );

    return requiredAIModel[0]?.model;
}
