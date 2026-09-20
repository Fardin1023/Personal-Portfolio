import { ArrowRight, CheckCircle2, Code2, Cpu, GitBranch, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";

const metrics = [
  { value: 79.76, decimals: 2, suffix: "%", label: "Detection Accuracy" },
  { value: 99.72, decimals: 2, suffix: "%", label: "Compilation Success" },
  { value: 18.4, decimals: 1, suffix: "%", label: "Code Smell Reduction" },
  { value: 109755, decimals: 0, suffix: "", label: "Refactoring Examples" },
];

const pipeline = [
  { icon: Code2, title: "Java Source", detail: "Real-world Java code" },
  { icon: Search, title: "Smell Detection", detail: "StarCoder2 / LLaMA 3.2" },
  { icon: GitBranch, title: "Refactoring", detail: "CodeLlama + QLoRA" },
  { icon: CheckCircle2, title: "Improved Code", detail: "Compile + quality checks" },
];

const contributions = [
  {
    number: "01",
    title: "Automated Code-Smell Detection",
    description:
      "Developed a two-stage LLM framework for automated Java code-smell detection and refactoring, designed to improve maintainability and structural code quality.",
  },
  {
    number: "02",
    title: "Fine-Tuned Detection Models",
    description:
      "Fine-tuned StarCoder2-3B and LLaMA-3.2-3B-Instruct to identify seven code-quality categories: Long Method, Feature Envy, God Class, Complex Method, Complex Conditional, Too Many Methods, and No Smell.",
  },
  {
    number: "03",
    title: "Large-Scale Refactoring Dataset",
    description:
      "Built a Java refactoring dataset containing 109,755 examples across 12 refactoring categories, mined from 11,150 Java projects using RefactoringMiner with preprocessing, deduplication, balancing, and stratified splitting.",
  },
  {
    number: "04",
    title: "LLM-Based Code Refactoring",
    description:
      "Fine-tuned CodeLlama-13B-Instruct using QLoRA and LoRA for instruction-based refactoring, enabling the model to predict a refactoring type and generate corresponding improved Java code.",
  },
  {
    number: "05",
    title: "Generated-Code Evaluation",
    description:
      "Achieved 99.72% compilation success, 0.815 cosine similarity, 0.717 ROUGE-L, and 63.31 BLEU on the evaluation dataset.",
  },
  {
    number: "06",
    title: "Software Quality Improvement",
    description:
      "Observed an 18.4% reduction in code smells together with improvements in cyclomatic complexity, coupling, cohesion, LOC, WMC, and RFC. Several improvements exceeded developer-authored reference refactorings.",
  },
];

const technologies = [
  "Python",
  "PyTorch",
  "Hugging Face",
  "StarCoder2",
  "LLaMA 3.2",
  "CodeLlama",
  "LoRA",
  "QLoRA",
  "PEFT",
  "TRL",
  "Unsloth",
  "bitsandbytes",
  "FlashAttention 2",
  "Java",
  "RefactoringMiner",
  "PMD",
  "Designite",
  "javalang",
  "Git",
  "H100 / A100 GPUs",
];

const AnimatedMetric = ({ metric }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (reduceMotion) {
        setDisplay(metric.value);
        return;
      }

      const duration = 950;
      const start = performance.now();
      const frame = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(metric.value * eased);
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [metric.value]);

  const formatted = metric.decimals === 0
    ? Math.round(display).toLocaleString()
    : display.toFixed(metric.decimals);

  return (
    <div ref={ref} className="research-metric">
      <strong>{formatted}{metric.suffix}</strong>
      <span>{metric.label}</span>
    </div>
  );
};

export const Research = () => {
  return (
    <section id="research" className="section-shell cv-auto">
      <div className="site-container">
        <Reveal>
          <div className="research-heading">
            <span className="section-kicker">Undergraduate Research</span>
            <h2 className="section-title mt-4">
              Exploring how LLMs can
              <span className="block font-serif font-normal italic text-[#9DBCBC]">
                improve software quality.
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80} className="research-hero-card">
          <div className="research-hero-top">
            <div>
              <span className="research-thesis-label">Undergraduate Thesis</span>
              <h3 className="research-thesis-title">
                LLM-Based Automated Code Smell Detection &amp; Refactoring for Java
              </h3>
            </div>
            <div className="research-university">
              <span>BRAC University</span>
              <small>B.Sc. in Computer Science &amp; Engineering</small>
            </div>
          </div>

          <p className="research-summary">
            Developed a two-stage Large Language Model framework for automatically detecting Java code smells and generating improved refactored code. The research combines fine-tuned code-focused LLMs, large-scale repository mining, instruction-based refactoring and software-quality evaluation.
          </p>

          <div className="research-pipeline" aria-label="Research pipeline">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="research-pipeline-group" key={step.title}>
                  <div className="research-pipeline-step">
                    <span className="research-pipeline-icon"><Icon size={18} /></span>
                    <strong>{step.title}</strong>
                    <small>{step.detail}</small>
                  </div>
                  {index < pipeline.length - 1 && (
                    <span className="research-pipeline-arrow" aria-hidden="true"><ArrowRight size={17} /></span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="research-metrics">
            {metrics.map((metric) => <AnimatedMetric key={metric.label} metric={metric} />)}
          </div>
        </Reveal>

        <div className="research-subheading">
          <Reveal>
            <span>Research Highlights</span>
            <h3>
              From detection to
              <em> automated refactoring.</em>
            </h3>
          </Reveal>
        </div>

        <div className="research-contributions">
          {contributions.map((item, index) => (
            <Reveal key={item.number} delay={index * 60}>
              <article className="research-contribution">
                <span className="research-contribution-number">{item.number}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="research-tech">
          <div className="research-tech-heading">
            <span className="inline-flex items-center gap-2"><Cpu size={16} /> Research Stack</span>
            <p>Models, frameworks and software-engineering tools used throughout the thesis.</p>
          </div>
          <div className="research-tech-list">
            {technologies.map((technology) => (
              <span key={technology} className="research-tech-pill">{technology}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
