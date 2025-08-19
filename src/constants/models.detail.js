const aiModelDetails = [
    {
        name: 'Deepseek V3',
        model: 'deepseek/deepseek-chat-v3-0324:free',
        description:
            'DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the DeepSeek V3 model and performs really well on a variety of tasks.',
    },
    {
        name: 'Deepseek R1',
        model: 'deepseek/deepseek-r1-0528:free',
        description:
            "May 28th update to the original DeepSeek R1 Performance on par with OpenAI o1, but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass. Fully open-source model.",
    },
    {
        name: 'Gemini 2.0 Flash',
        model: 'google/gemini-2.0-flash-exp:free',
        description:
            'Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to Gemini Flash 1.5, while maintaining quality on par with larger models like Gemini Pro 1.5. It introduces notable enhancements in multimodal understanding, coding capabilities, complex instruction following, and function calling. These advancements come together to deliver more seamless and robust agentic experiences.',
    },
    {
        name: 'GPT OSS',
        model: 'openai/gpt-oss-20b:free',
        description:
            'gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for lower-latency inference and deployability on consumer or single-GPU hardware. The model is trained in OpenAI’s Harmony response format and supports reasoning level configuration, fine-tuning, and agentic capabilities including function calling, tool use, and structured outputs.',
    },
    {
        name: 'Kimi K2',
        model: 'moonshotai/kimi-k2:free',
        description:
            'Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It is optimized for agentic capabilities, including advanced tool use, reasoning, and code synthesis. Kimi K2 excels across a broad range of benchmarks, particularly in coding (LiveCodeBench, SWE-bench), reasoning (ZebraLogic, GPQA), and tool-use (Tau2, AceBench) tasks. It supports long-context inference up to 128K tokens and is designed with a novel training stack that includes the MuonClip optimizer for stable large-scale MoE training.',
    },
    {
        name: 'Qwen3 Coder',
        model: 'qwen/qwen3-coder:free',
        description:
            'Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts).',
    },
    {
        name: 'Meta Llama 3.3',
        model: 'meta-llama/llama-3.3-70b-instruct:free',
        description:
            'The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks. Supported languages: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai.',
    },
];

export default aiModelDetails;
