```tsx
export default function Dispatch() {
  return (
    <main className="p-10 bg-gray-50 min-h-screen text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Orbixum Dispatch</h1>
      <p className="mb-10 text-lg max-w-2xl">
        The Orbixum Dispatch delivers sharp updates on global AI developments —
        policy, investment, and innovation.
      </p>
      <div className="space-y-10 max-w-3xl">
        <article>
          <h2 className="text-2xl font-semibold mb-2">
            China Expands AI Oversight With New National Standards
          </h2>
          <p>
            China’s Ministry of Industry and Information Technology released new
            national standards for AI risk management this week, requiring
            transparency reporting from large language model developers. The
            framework mirrors aspects of the EU AI Act and positions China as a
            global standard-setter in AI governance.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-2">
            Saudi Arabia Establishes $40 Billion AI Investment Fund
          </h2>
          <p>
            Saudi Arabia’s sovereign wealth fund announced a $40 billion initiative
            targeting global AI infrastructure and startups. The fund will
            prioritize partnerships in semiconductor design, cloud computing, and
            applied AI across energy and logistics.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-2">
            EU Parliament Approves Landmark AI Act
          </h2>
          <p>
            The European Parliament formally approved the AI Act, the world’s first
            comprehensive framework regulating artificial intelligence. The law
            introduces a tiered system categorizing AI uses by risk, banning
            “unacceptable” applications such as social scoring, and mandating
            transparency for generative AI.
          </p>
        </article>
      </div>
    </main>
  )
}
```
