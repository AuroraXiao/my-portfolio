import Section from '@/components/Section';
import { SKILLS } from '@/data/skills';
import { SITE } from '@/data/site';
import { allProjects, resolveAsset } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const moodcheck = allProjects.find((p) => p.slug === 'moodcheck-app');
  const med = allProjects.find((p) => p.slug === 'medical_appointment_app');
  return (
    <>
      <Section title="About" subtitle="关于我">
        <div className="space-y-6">
          <div className="flex items-center gap-4 md:gap-5">
            <img
              src={resolveAsset('/src/assets/images/avatar.jpg')}
              alt="Avatar"
              className="h-[clamp(5rem,8vw,7rem)] w-[clamp(5rem,8vw,7rem)] rounded-full border"
            />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{SITE.title}</h1>
              <p className="mt-2 text-foreground/70">{SITE.description}</p>
              <div className="mt-3 flex gap-2">
                <Link to="/work">
                  <Button size="sm">查看作品</Button>
                </Link>
                <Link to="/contact">
                  <Button size="sm" variant="outline">联系我</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-semibold">Skills</h3>
              <div className="grid gap-3">
                {Object.entries(SKILLS).map(([group, items]) => (
                  <div key={group} className="rounded-2xl border border-border p-3">
                    <div className="text-sm font-medium">{group}</div>
                    <div className="mt-1 text-sm text-foreground/70">{items.join(' · ')}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-foreground/70">
                专注于 AI 算法与移动端 UI/UX 设计的跨学科工程师。擅长计算机视觉检测/跟踪、NLP 轻量应用与原型验证，强调快速迭代与可用性。
              </p>
              <p className="text-foreground/70">工具偏好：PyTorch / TensorFlow · Python / SQL · Figma / Axure · React + Tailwind。</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="AI / ML Experience" subtitle="AI 算法相关">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">算法实习生 · 美的集团</div>
              <div className="text-xs text-foreground/60">2025 — 至今</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/70">
              <li>图像检索与质量评估：结合传统 CV 与深度学习，构建产品图像检索/聚类与质量评估流程。</li>
              <li>索引与向量库：基于倒排索引/近似检索优化检索性能，支持大规模商品库。</li>
              <li>效果与可解释：完善离线评测与可视化看板，支持业务验收。</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">多目标跟踪 · YOLOv8 + ByteTrack</div>
              <div className="text-xs text-foreground/60">2025</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/70">
              <li>处理 3000+ 帧视频，训练检测器并完成多目标跟踪流水线，达成稳定跟踪精度（MOT 指标 85%+）。</li>
              <li>提供端到端数据清洗、训练、评估与可视化脚本，复现便捷。</li>
            </ul>
            <div className="pt-2">
              <a className="inline-flex" href="https://github.com/AuroraXiao/YOLOv8-Multi-Class-Tracking-on-MOT17.git" target="_blank" rel="noreferrer">
                <Button size="sm" variant="outline">GitHub 项目</Button>
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">医疗问答 · 基于 Flan‑T5</div>
              <div className="text-xs text-foreground/60">2025 — 至今</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/70">
              <li>构建提示词与检索增强的轻量医疗问答原型，优化小样本场景表现。</li>
              <li>实现推理服务封装与评测集对齐，关注响应时延与可控性。</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">数据工程 & NLP · 晨讯科技</div>
              <div className="text-xs text-foreground/60">2025</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/70">
              <li>Python 抓取与清洗：抓取 500+ 商品、6000+ 图像并完成结构化清洗与去噪。</li>
              <li>NLP 文本分类：基于 TF‑IDF 的轻量审核/分类流水线，提升处理效率。</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Product Design" subtitle="产品设计 / UI·UX">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">MoodCheck — 情绪助手 App（原型）</div>
              <div className="text-xs text-foreground/60">Mobile · Figma</div>
            </div>
            <p className="mt-2 text-sm text-foreground/70">面向日常快速记录的移动端体验，强调零负担输入与轻量可视化。</p>
            {moodcheck?.figmaUrl && (
              <div className="pt-2">
                <a className="inline-flex" href={moodcheck.figmaUrl} target="_blank" rel="noreferrer">
                  <Button size="sm">在 Figma 查看</Button>
                </a>
              </div>
            )}
          </div>
          <div className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">Medical Appointment — 医疗预约 App（原型）</div>
              <div className="text-xs text-foreground/60">Mobile · Figma</div>
            </div>
            <p className="mt-2 text-sm text-foreground/70">以清晰可用为核心的预约流程与时段呈现，覆盖老年友好与可达性细节。</p>
            {med?.figmaUrl && (
              <div className="pt-2">
                <a className="inline-flex" href={med.figmaUrl} target="_blank" rel="noreferrer">
                  <Button size="sm">在 Figma 查看</Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}


