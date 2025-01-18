import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>EDUCATIONAL RESOURCES</h1>

      <div className="py-8">
        <h1 className="text-primary font-bold text-2xl py-4">
          SECTION 1. HOW TO BECOME AN EMBALMER
        </h1>
        <p>
          Becoming an embalmer is a career that combines science, art, and
          compassion. It is a deeply meaningful profession that requires
          specialized knowledge, technical skills, and emotional resilience. If
          you are passionate about supporting others, interested in science, and
          dedicated to meaningful work, a career as an embalmer might be the
          right path for you.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            To become a licensed embalmer in the Philippines, one must be at
            least 18 years old and have a high school diploma.
          </li>
          <li>
            One must have a certification in basic Anatomy and Physiology,
            Microbiology and Parasitology, Sanitation and Hygiene, Ethics, and
            Jurisprudence.
          </li>
          <li>Have at least a year of studying and training in the field.</li>
          <li>
            One must finish their practicum in partner mortuaries for two weeks.
          </li>
          <li>
            Must pass the Licensure Embalmers Examination, which includes
            written, oral, and practical examination.
          </li>
        </ul>
        <p className="mt-4">
          The Department of Health has a list of requirements that must be met
          before one can be licensed to practice embalming in the Philippines.
          These requirements include:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Application form</li>
          <li>PSA Birth Certificate</li>
          <li>Barangay Clearance</li>
          <li>NBI/Police Clearance</li>
          <li>Medical Certificate from a Government Physician</li>
          <li>
            Certified True Copy of Diploma or Transcript of Record (College
            Diploma or High School Diploma)
          </li>
          <li>Marriage Contract of Female Married Applicant</li>
          <li>Passport Size Picture with Name Tag (5 copies)</li>
        </ul>
      </div>

      <div className="py-8">
        <h1 className="text-primary font-bold text-2xl py-4">
          SECTION 2. PROFESSIONAL STANDARDS
        </h1>
        <p>
          To ensure that embalmers uphold the dignity of the deceased and
          provide respectful care to grieving families, strict professional
          standards guide their work. These standards are designed to promote
          safety, integrity, and excellence in the practice of embalming. This
          includes:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            Licensing: Embalmers must be licensed by the Department of Health
            (DOH). Licenses are renewable every three years.
          </li>
          <li>
            Training: Embalmers must update their knowledge by taking training
            courses from DOH-accredited institutions.
          </li>
          <li>
            Continuing education: Embalmers must participate in a continuing
            education program to improve their skills.
          </li>
          <li>
            Safety: Embalmers must use personal protective equipment, such as
            gloves, aprons, boots, and goggles.
          </li>
          <li>
            Sanitation: Embalmers must follow sanitary precautions and ensure
            that no parts of the remains are removed.
          </li>
          <li>
            Embalming rooms: Embalming rooms must be made of concrete or
            semi-concrete and have a smooth, non-absorbent surface.
          </li>
          <li>
            Embalming tables: Embalming tables must be made of marble, aluminum,
            stainless steel, or another impervious material.
          </li>
          <li>
            Death certificates: Embalmers must obtain death certificates before
            embalming.
          </li>
          <li>
            Hazardous substances: Embalmers must get special permission to use
            certain hazardous substances.
          </li>
        </ul>
      </div>
    </div>
  );
}
