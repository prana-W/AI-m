import React from 'react';
import aiModelDetails from '@/constants/models.detail.js';
import { ModelCard } from '@/components';

const Models = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">AI Models</h1>
                <p className="text-gray-600">
                    Explore our collection of AI models with their
                    specifications and capabilities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiModelDetails.map((modelDetail, index) => (
                    <ModelCard
                        key={index}
                        name={modelDetail.name}
                        model={modelDetail.model}
                        description={modelDetail.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Models;
