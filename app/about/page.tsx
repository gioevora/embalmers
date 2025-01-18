import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10 bg-cover bg-center">
      <h1 className={title()}>ABOUT EMBALMING</h1>

      <div className="py-8">
        <h1 className="text-primary font-bold text-2xl py-4">
          SECTION 1. WHAT IS EMBALMING?
        </h1>
        <p>
          Embalming is widely recognized as a challenging profession due to the
          exposure to various chemicals utilized in the preservation of deceased
          human bodies. The role of the embalmers greatly affects both their
          personal and professional lives. In fact, it is important to consider
          some aspects of this procedure, such as the tolerance to handle
          cadavers and the capacity to manage their emotions while doing the
          embalming process. However, there are also existing driving factors
          that make the embalmers more motivated and contented with their
          occupation despite the challenges they encounter as an embalmer.
        </p>
        <br />
        <p>
          Even though it demonstrated a challenging role, embalming is a
          significant aspect of modern funeral practices. Embalmers are
          responsible for preserving and making a comfortable appearance such as
          putting make-ups and powder to make a dead look asleep. Additionally,
          it is required to have specialized skills in the field of embalming
          specifically, by injecting fluids and other chemicals for disinfection
          and restore a natural appearance of a dead body. Considering the
          process of embalming and its difficulties, their exceptional hardwork
          and passion, despite our grieving, make us feel the presence of our
          dead loved ones in their remaining time with us.
        </p>
      </div>

      <div className="py-8">
        <h1 className="text-primary font-bold text-2xl py-4">
          SECTION 2. BRIEF HISTORY OF EMBALMING
        </h1>
        <p>
          Embalming occurred during the time of the early Egyptians, as they
          believed in life after death, so that dead body must undergo
          mummification (Abello, Murillo et.al, 2018). The process involves
          cutting the body to remove internal organs and placing the body into
          the canopy jars. After, re-rinsing the body with wine and spices and
          covering it with salt for 70 days and placing it in a sarcophagus. As
          time passes by, the process of mummification has been adopted and
          changed into embalming. It is an approach of chemically preserving
          tissues using fluids (Pathobiology of Human Disease, 2014).
        </p>
      </div>

      <div className="py-8">
        <h1 className="text-primary font-bold text-2xl py-4">
          SECTION 3. KEY RESPONSIBILITIES OF EMBALMERS
        </h1>
        <div className="py-4">
          <h2 className="font-semibold">1. Preserving the Body:</h2>
          <p>
            Embalmers use chemical solutions to slow down the decomposition
            process of the body. The most common chemical used is formaldehyde,
            which, when injected into the body, acts as a preservative and helps
            to maintain the body’s appearance for an extended period of time.
          </p>
        </div>

        <div className="py-4">
          <h2 className="font-semibold">2. Sanitization and Disinfection:</h2>
          <p>
            An embalmer ensures the body is properly sanitized to prevent the
            spread of bacteria and germs. This step is essential for health and
            safety, especially in cases of trauma or disease. The body is
            thoroughly cleaned before any embalming fluid is applied.
          </p>
        </div>

        <div className="py-4">
          <h2 className="font-semibold">
            3. Restoring the Appearance of the Deceased:
          </h2>
          <p>
            Embalmers use their skills in restorative art to repair any visible
            damage to the body caused by accidents, trauma, or natural
            decomposition. This can involve reconstructing facial features,
            closing wounds, or filling in any areas where the body may have lost
            tissue. It helps make the deceased look peaceful and presentable for
            the family.
          </p>
        </div>

        <div className="py-4">
          <h2 className="font-semibold">4. Cosmetic Application:</h2>
          <p>
            After the embalming process, embalmers may apply makeup to the
            deceased to enhance their appearance and give them a lifelike
            appearance.
          </p>
        </div>

        <div className="py-4">
          <h2 className="font-semibold">5. Dressing and Positioning:</h2>
          <p>
            Once the body has been preserved and restored, the embalmer will
            carefully dress the deceased in clothing chosen by the family. They
            will also position the body in a dignified way for the funeral
            service or viewing.
          </p>
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-primary font-bold text-2xl py-4">
          SECTION 4. WHY EMBALMING MATTERS?
        </h1>
        <p>
          Embalming is an important and compassionate practice that serves
          several purposes in the funeral process. While many may be unaware of
          its significance, embalming plays a crucial role in ensuring that
          families can say goodbye to their loved ones with dignity and respect.
          Here’s why embalming matters:
        </p>
        <ul className="list-disc list-inside">
          <li>Preserved and restore the cadavers for burial</li>
          <li>Provides families with comfort and closure</li>
          <li>Honors the deceased with dignity</li>
          <li>Upholds cultural and religious funeral tradition</li>
          <li>Maintains public health and safety</li>
        </ul>
      </div>
    </section>
  );
}
