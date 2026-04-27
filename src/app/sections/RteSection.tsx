import { Download, FileText } from "lucide-react";
import type { ReactNode } from "react";

type TableRow = Record<string, string>;

const asignacionRows = [
  ["60368716", "Representante legal"],
  ["60378959", "Revisor fiscal"],
  ["5525250", "Consejo administración"],
  ["60349696", "Consejo administración"],
  ["13476676", "Consejo administración"],
  ["13257575", "Consejo administración"],
  ["60338472", "Consejo administración"],
  ["60343404", "Consejo administración"],
  ["13452901", "Consejo administración"],
  ["60399612", "Consejo administración"],
  ["60338291", "Consejo administración"],
  ["13452551", "Consejo administración"],
  ["88312310", "Consejo administración"],
  ["60352419", "Junta de vigilancia"],
  ["1090428830", "Junta de vigilancia"],
  ["37336761", "Junta de vigilancia"],
  ["5497093", "Consejo administración"],
  ["1090411517", "Junta de vigilancia"],
  ["37272413", "Contadora"],
  ["1090433754", "Contadora"],
  ["1090424627", "Oficial de cumplimiento"],
].map(([identificacion, cargo]) => ({ identificacion, cargo }));

const consejoRows = [
  ["5525250", "Principal"],
  ["60338472", "Principal"],
  ["13257575", "Principal"],
  ["13476676", "Principal"],
  ["60349696", "Principal"],
  ["60343404", "Principal"],
  ["88312310", "Principal"],
  ["60338291", "Suplente"],
  ["60399612", "Suplente"],
  ["13452901", "Suplente"],
  ["5497093", "Suplente"],
  ["13452551", "Suplente"],
].map(([id, estado]) => ({ id, estado }));

const juntaRows = [
  ["37336761", "Principal"],
  ["1090428830", "Principal"],
  ["60352419", "Principal"],
  ["88145698", "Suplente"],
  ["1090411517", "Suplente"],
].map(([id, estado]) => ({ id, estado }));

const revisorRows = [["60378959", "Principal"]].map(([id, estado]) => ({
  id,
  estado,
}));

const foundersLinks = [
  {
    href: "/docs/rte/fundadores-juridicos.pdf",
    label: "Fundadores jurídicos",
  },
  {
    href: "/docs/rte/fundadores-naturales.pdf",
    label: "Fundadores naturales",
  },
];

const financialLinks = [
  {
    href: "/docs/rte/certificacion-estados-financieros.pdf",
    label: "4.A. Certificación a los estados financieros",
  },
  {
    href: "/docs/rte/certificacion-antecedentes-judiciales.pdf",
    label: "4.B. Certificación de los antecedentes judiciales",
  },
  {
    href: "/docs/rte/certificacion-representante-legal-revisoria-fiscal.pdf",
    label: "4.C. Certificación del representante legal y revisoría fiscal",
  },
  {
    href: "/docs/rte/certificacion-pagos-miembros-directivos.pdf",
    label: "4.D. Certificación pagos a miembros directivos",
  },
  {
    href: "/docs/rte/estado-cambios-patrimonio-2024.pdf",
    label: "4.E. Estado de cambios en el patrimonio año 2024",
  },
  {
    href: "/docs/rte/estado-resultados-integral-comparativo-2024-2023.pdf",
    label: "4.F. Estado de resultado integral acumulado comparativos 2023-2024",
  },
  {
    href: "/docs/rte/estado-resultados-integral-2024.pdf",
    label: "4.G. Estado de resultado integral acumulado 2024",
  },
  {
    href: "/docs/rte/estado-situacion-financiera-comparativo-2024-2023.pdf",
    label: "4.H. Estado de situación financiera comparativos 2023-2024",
  },
  {
    href: "/docs/rte/estado-situacion-financiera-individual-2024.pdf",
    label: "4.I. Estado de situación financiera individual a 31 de diciembre de 2024",
  },
  {
    href: "/docs/rte/notas-estados-financieros-2024.pdf",
    label: "4.K. Notas a los estados financieros 2024",
  },
];

function RteDocumentLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-md px-2 py-2 text-primary transition-colors hover:bg-primary/5 hover:text-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span aria-hidden="true" className="text-primary">
        →
      </span>
      <FileText aria-hidden="true" className="size-4 shrink-0" />
      <span className="font-medium">{label}</span>
      <Download
        aria-hidden="true"
        className="size-4 shrink-0 opacity-0 transition-all group-hover:translate-y-0.5 group-hover:opacity-100"
      />
    </a>
  );
}

function RteSectionBlock({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className="space-y-5">
      <h2 className="font-display text-2xl font-bold leading-tight text-primary md:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function RteTable({
  columns,
  rows,
}: {
  columns: { key: string; label: string }[];
  rows: TableRow[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm md:text-base">
        <thead className="bg-muted text-foreground">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="border-r border-border px-4 py-4 font-bold last:border-r-0"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${Object.values(row).join("-")}-${index}`} className="even:bg-muted/35">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="border-r border-t border-border px-4 py-3 last:border-r-0"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RteContent() {
  return (
    <div className="rounded-lg border border-border bg-background p-6 shadow-sm md:p-10">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
          Régimen Tributario Especial
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          Reconoce que los sistemas y la información de TIC son activos valiosos que
          son esenciales para apoyar los objetivos estratégicos de la entidad.
        </p>
      </div>

      <div className="mt-10 space-y-10 text-base leading-8 text-foreground/85">
        <RteSectionBlock title="1. Denominación, identificación y domicilio">
          <p className="uppercase">
            Cooperativa de Ahorro y Crédito Caja Unión, Unión Cooperativa,
            <br />
            NIT. 900.206.146-7
            <br />
            Domiciliada en Cúcuta - Norte de Santander
          </p>
        </RteSectionBlock>

        <RteSectionBlock title="2. Objeto social">
          <div className="space-y-5">
            <p>
              La Cooperativa de Ahorro y Crédito Caja Unión Cooperativa “Unión
              Cooperativa” es una empresa de economía solidaria de responsabilidad
              limitada, con número de asociados y capital variables e ilimitados.
            </p>
            <p>
              En Unión Cooperativa el objeto del acuerdo cooperativo será propender
              por el desarrollo integral de sus asociados y la satisfacción de sus
              necesidades, sus familias y la comunidad en general, mediante la
              prestación de los servicios de ahorro y crédito.
            </p>
            <p>
              Con base en el acuerdo cooperativo, la Cooperativa impulsará la
              participación de sus asociados en el proceso de fortalecimiento de la
              economía solidaria.
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>Ahorro y crédito para prestar servicios financieros a sus asociados.</li>
              <li>
                Solidaridad y bienestar social con programas para el asociado y su
                familia.
              </li>
              <li>Educación, capacitación y formación para la comunidad asociada.</li>
              <li>
                Fomento empresarial para creación y fortalecimiento de empresas de
                los asociados.
              </li>
              <li>Fomento de la economía solidaria y sus entidades asociadas.</li>
              <li>
                Operación de descuento por nómina o mecanismos autorizados por la
                ley, con verificación de licitud de recursos.
              </li>
            </ol>
          </div>
        </RteSectionBlock>

        <RteSectionBlock title="4. Monto y destino de asignación permanentes">
          <RteTable
            columns={[
              { key: "identificacion", label: "Identificación" },
              { key: "cargo", label: "Cargo que ostenta" },
            ]}
            rows={asignacionRows}
          />
          <p className="mt-6 text-muted-foreground">
            No aplica de acuerdo con el parágrafo del artículo 1.2.1.5.2.2 del
            Decreto 2150 de 2017.
          </p>
        </RteSectionBlock>

        <RteSectionBlock title="5. Cargos gerenciales, directivos o de control">
          <RteTable
            columns={[
              { key: "id", label: "ID" },
              { key: "estado", label: "Estado" },
            ]}
            rows={consejoRows}
          />
          <p className="text-muted-foreground">
            Los nombres e identificación de las personas que ocupan cargos
            gerenciales, directivos o de control son: Consejo de Administración
            periodo 2023-2026.
          </p>

          <div>
            <h3 className="mb-4 text-xl font-bold uppercase text-primary">
              Junta de vigilancia
            </h3>
            <RteTable
              columns={[
                { key: "id", label: "ID" },
                { key: "estado", label: "Estado" },
              ]}
              rows={juntaRows}
            />
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold uppercase text-accent">
              Revisoría fiscal
            </h3>
            <RteTable
              columns={[
                { key: "id", label: "ID" },
                { key: "estado", label: "Estado" },
              ]}
              rows={revisorRows}
            />
          </div>
        </RteSectionBlock>

        <RteSectionBlock title="6. Monto total de pagos a miembros de los cuerpos directivos">
          <p>
            En el periodo fiscal 2024 los pagos a miembros de los cuerpos
            directivos totalizaron la suma de DOSCIENTOS SESENTA Y CUATRO MILLONES
            NOVECIENTOS NOVENTA Y CUATRO MIL QUINIENTOS NOVENTA Y UN PESOS
            ($264.994.561).
          </p>
        </RteSectionBlock>

        <RteSectionBlock title="7. Nombre e identificación de los fundadores">
          <p>
            La Cooperativa de Ahorro y Crédito Caja Unión es una empresa de economía
            solidaria, que nació de la iniciativa de empresas del sector cooperativo
            de orden regional y nacional. Creada mediante acta de constitución N°
            001 de febrero 15/2008, se encuentra inscrita en la Cámara de Comercio
            de Cúcuta. La entidad está autorizada para ejercer la actividad
            financiera por la Supersolidaria y se encuentra inscrita en FOGACOOP.
          </p>
          <div className="mt-4 grid gap-2">
            {foundersLinks.map((link) => (
              <RteDocumentLink key={link.href} {...link} />
            ))}
          </div>
        </RteSectionBlock>

        <RteSectionBlock title="8. Monto del patrimonio al 31 de diciembre de 2024">
          <p>
            El patrimonio de la Cooperativa de Ahorro y Crédito Caja Unión a 31 de
            diciembre de 2024 es de TRES MIL SEISCIENTOS DIECISIETE MILLONES DOCE
            MIL CIENTO TRES CON TREINTA Y SIETE CENTAVOS ($3.617.012.103,37).
          </p>
        </RteSectionBlock>

        <RteSectionBlock title="9. Donaciones particulares">
          <p>
            La Cooperativa de Ahorro y Crédito Caja Unión no ha recibido donaciones
            a lo largo de su existencia.
          </p>
        </RteSectionBlock>

        <RteSectionBlock title="10. Donaciones anónimas">
          <p>
            La Cooperativa de Ahorro y Crédito Caja Unión no ha recibido donaciones
            a lo largo de su existencia.
          </p>
        </RteSectionBlock>

        <RteSectionBlock title="12. Estados financieros">
          <div className="grid gap-2">
            {financialLinks.map((link) => (
              <RteDocumentLink key={link.href} {...link} />
            ))}
          </div>
        </RteSectionBlock>

        <RteSectionBlock title="13.1 Datos de la declaración de renta 2023">
          <p>N° de formulario declaración de renta 2024 - 1117617247228</p>
          <p>
            <strong>Fecha de presentación:</strong> 19 de mayo de 2025
          </p>
        </RteSectionBlock>

        <RteSectionBlock title="14. Recursos de cooperación internacional recibidos">
          <p>
            La Cooperativa de Ahorro y Crédito Caja Unión durante el año 2024 no
            recibió recursos de Cooperación Internacional.
          </p>
        </RteSectionBlock>
      </div>
    </div>
  );
}

export function RteSection() {
  return (
    <section id="rte" className="scroll-mt-24 bg-muted/45 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <RteContent />
      </div>
    </section>
  );
}
