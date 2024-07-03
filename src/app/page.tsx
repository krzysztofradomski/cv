import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import WorkCard from "@/components/work-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 ">
      <div className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            {/* <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p> */}
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>

            <div className="flex-col gap-2 font-mono text-sm text-muted-foreground">
              {RESUME_DATA.contact.social.map((social) => {
                return (
                  <a href={social.url} key={social.name} className="my-1 block">
                    <span className="block underline">{social.url}</span>
                  </a>
                );
              })}
              {RESUME_DATA.contact.email ? (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="my-1 block"
                >
                  <span className="block">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a
                  href={`tel:${RESUME_DATA.contact.tel}`}
                  className="my-1 block"
                >
                  <span className="">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar> */}
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <hr />
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          <hr />
          {RESUME_DATA.work.map((work) => {
            return <WorkCard key={work.company} {...work} />;
          })}
        </Section>

        <Section className="">
          <h2 className="text-xl font-bold">Other projects</h2>
          <hr />
          {RESUME_DATA.projects.map((p) => {
            //@ts-expect-error: same structure as work
            return <WorkCard key={p.company} {...p} />;
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <hr />
          <div className="flex-column flex flex-wrap gap-1">
            <div className="mb-2 flex w-full flex-grow text-sm">
              <div className="flex flex-wrap gap-1 text-pretty font-mono">
                {Object.entries(RESUME_DATA.skills).map(([group, skills]) => {
                  return skills.map((skill, i) => (
                    <span key={skill}>
                      {skill}
                      {i + 1 === skills.length ? "" : ","}
                    </span>
                  ));
                })}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          <hr />
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h4 className="text-sm font-semibold leading-none">
                      {education.school}
                    </h4>
                    {/* <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div> */}
                  </div>
                </CardHeader>
                {education?.degree ? (
                  <CardContent className="mt-2">
                    {education?.degree}
                  </CardContent>
                ) : null}
                {education?.certificates ? (
                  <CardContent className="mt-2">
                    {education.certificates.map((certificate, i) => {
                      const [name, url] = Object.entries(certificate)[0];
                      return (
                        <span key={name} className="mr-2 inline">
                          <a href={url} target="_blank" className="underline">
                            {name}
                            {i + 1 === education.certificates.length ? "" : ","}
                          </a>
                        </span>
                      );
                    })}
                  </CardContent>
                ) : null}
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Rewards and recognitions</h2>
          <hr />
          <ul className="flex-column flex list-disc flex-wrap gap-1">
            <ul className="ml-4 list-disc text-pretty font-mono text-sm">
              {RESUME_DATA.rewards.filter(Boolean).map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </ul>
        </Section>
      </div>
    </main>
  );
}
