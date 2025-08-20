import {
    Brain,
    Shield,
    Zap,
    Users,
    Globe,
    Code,
    Lock,
    ArrowRight,
    Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import aiModelDetails from '@/constants/models.detail.js';

export default function AboutPage() {
    const features = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: 'Multi-Model Intelligence',
            description:
                'Compare responses from 12+ AI models including Gemini, GPT, DeepSeek, and more - all from a single interface.',
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Privacy First',
            description:
                'Your API keys are stored locally in your browser. We never see or store your credentials on our servers.',
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Lightning Fast',
            description:
                'Get instant responses from multiple models simultaneously. No waiting, no queues, just pure AI power.',
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: 'OpenRouter Integration',
            description:
                "Simply paste your OpenRouter API key and unlock access to the world's most advanced AI models.",
        },
    ];

    const models = aiModelDetails.map((model) => model.name);

    const navigate = useNavigate();

    const handleGetStarted = () => {
        const apiKey = localStorage.getItem('openrouter_api_key');
        if (apiKey) {
            navigate('/');
        } else {
            navigate('/api-keys');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
                <div className="relative max-w-7xl mx-auto px-6 py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-300 text-sm font-medium">
                                Multi-Model AI Platform
                            </span>
                        </div>

                        <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                            AI-m
                        </h1>
                        <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
                            <span className="text-purple-400 font-semibold">
                                AI-m integrates models
                            </span>{' '}
                            - A recursive name for a revolutionary platform
                        </p>
                        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                            Compare and contrast responses from 12+ cutting-edge
                            AI models simultaneously. One prompt, multiple
                            perspectives, infinite possibilities.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            {models.map((model, index) => (
                                model !== 'None'&& <div
                                    key={model}
                                    className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 text-sm hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {model}
                                </div>
                            ))}
                        </div>
                        <button
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            onClick={handleGetStarted}
                        >
                            Get Started Now
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Why Choose AI-m?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Experience the future of AI interaction with our unique
                        multi-model approach
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
                        >
                            <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-400">
                            Getting started is incredibly simple
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Code className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                1. Add Your API Key
                            </h3>
                            <p className="text-gray-400">
                                Paste your OpenRouter API key - it's stored
                                securely in your browser
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                2. Select Models
                            </h3>
                            <p className="text-gray-400">
                                Choose any three models from our collection of
                                12+ AI models
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                3. Compare Results
                            </h3>
                            <p className="text-gray-400">
                                Get instant responses from all selected models
                                side by side
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-3xl p-12 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Lock className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Your Privacy is Our Priority
                    </h2>
                    <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                        We believe in complete transparency and user control.
                        Your API keys never leave your device - they're stored
                        locally in your browser using secure local storage.
                    </p>
                    <div className="inline-flex items-center gap-2 text-green-400 font-semibold">
                        <Shield className="w-5 h-5" />
                        <span>100% Client-Side Security</span>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur">
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Want to know about all the AI Models?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join thousands of users who are already leveraging the
                        power of multiple AI models
                    </p>

                    <button
                        onClick={() => navigate('/models')}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        Explore Models
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
