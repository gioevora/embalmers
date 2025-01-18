'use client'
import { title } from "@/components/primitives";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>BREAKING THE STIGMA</h1>

      <div className="py-8">
        <h1 className="text-primary font-bold text-2xl py-4">SECTION 1. MYTHS VS. FACTS</h1>
        <p>The embalming profession is often misunderstood and surrounded by myths that contribute to stigma and fear. These misconceptions can overshadow the vital and compassionate role embalmers play in honouring and preserving the deceased. To help break the stigma and foster deeper understanding of their profession, it’s important to separate fact from fiction. Here are the lists of the common myths about embalmers and the truth behind their profession.</p>

        <div className="py-12">
          <Table aria-label="Myths vs. Facts">
            <TableHeader>
              <TableColumn>MYTHS</TableColumn>
              <TableColumn>FACTS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Embalmers are uneducated and unqualified</TableCell>
                <TableCell>Embalmers are trained professionals who undergo extensive training and passed the written and practical examination</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Embalmers are disgusting or creepy individuals</TableCell>
                <TableCell>Embalmers are compassionate professionals who treat both the deceased and their families with dignity and respect</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Embalmers only work at night or in dark, creepy places</TableCell>
                <TableCell>Embalmers work in well-maintained, hygienic and professional settings. Their primary goal is to preserve and prepare the body with care, not to create a strange atmosphere.</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Embalming is unnecessary</TableCell>
                <TableCell>Embalming allows the families to honor loved ones and follow cultural traditions.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  );
}
