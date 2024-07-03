import { RESUME_DATA } from "@/data/resume-data";
import { Card, CardContent, CardHeader } from "./ui/card";

type WorkCardProps = (typeof RESUME_DATA.work)[number];

export default function WorkCard(work: WorkCardProps) {
  return (
    <Card key={work.company}>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            {work.title}
          </h3>
          <div className="text-sm tabular-nums text-gray-500">
            {work.start} {work?.end ? "-" : ""} {work.end}
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h4 className="inline-flex items-center justify-center gap-x-1 text-sm leading-none">
            <a className="underline" href={work.link}>
              {work.company}
            </a>
          </h4>
          <div className="text-sm tabular-nums text-gray-500">
            <span className="inline-flex gap-x-1">
              {work?.badges?.map((badge) => <span key={badge}>{badge}</span>)}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mb-4 mt-2 text-sm">
        <ul className="ml-4 list-disc">
          {work.description.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
