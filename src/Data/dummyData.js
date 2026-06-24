//surgeries and treatmnet

const dummyData = [
    {
        title: "Laparoscopic Cholecystectomy (Gallbladder)",
        navTo:'laparoscopic-cholecystectomy',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Removal of diseased gallbladder through 3 tiny holes (5-10mm each) using a camera and specialized instruments. Gold-standard technique worldwide — open surgery is now used only in the most complicated cases. Duration: 30-45 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Gallbladder stones causing pain, nausea, vomiting`,
                        `Infected/inflamed gallbladder (acute cholecystitis)`,
                        `Gallbladder polyps >10mm (cancer risk)`,
                        `Repeated biliary colic attacks`,
                        `Gallstone pancreatitis`,
                        `Porcelain gallbladder`,
                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                        <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                               <tr><td> Day	</td><td> Progress</td></tr>
                               <tr><td> Day 0 </td><td>   Walk within 4-6 hours, sip liquids</td></tr>
                               <tr><td> Day 1</td>	<td> Soft diet, discharge possible</td></tr>
                               <tr><td> Day 3-5	</td><td> Light daily activities</td></tr>
                               <tr><td> Day 7	</td><td> Normal diet, follow-up visit</td></tr>
                               <tr><td> Day 10-14</td><td> 	Back to office work</td></tr>
                               <tr><td> Day 21-30</td><td> 	Full physical activity</td></tr>
                            </tbody>
                        </table>                   
                    ]
                    },
                    {
                        type:'heading',
                        content:'Laparoscopic vs Open:'
                    },
                    {
                        type:'table',
                        content:[
                             <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                    <th>Factor</th>
                                    <th>Laparscopic</th>
                                    <th>Open</th>
                                </tr>
                            </thead>
                            <tbody>
                               <tr><td> Incision	     </td><td>      3 holes (5-10mm)</td><td>	    15-20cm cut</td></tr>
                               <tr><td> Pain	         </td><td>    Minimal	        </td><td>        Significant</td></tr>
                               <tr><td> Hospital Stay	</td><td>     1 day	         </td><td>       5-7 days</td></tr>
                               <tr><td> Return to Work</td><td>       7-10 days	    </td><td>        4-6 weeks</td></tr>
                               <tr><td> Scarring	     </td><td>     Nearly invisible</td><td>	    Large scar</td></tr>
                               <tr><td> Infection Risk</td><td>        Very low	     </td><td>       Higher</td></tr>
                            </tbody>
                        </table>                            

                        ]
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`10,000+ cholecystectomies. 3-port technique (standard is 4 — one less scar). Even difficult/inflamed gallbladders managed laparoscopically. Same-day discharge available.`

                    }
                ]
    },
     {
        title: "Laparoscopic Appendicectomy",
        navTo:'laparoscopic-appendicectomy',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Minimally invasive removal of inflamed appendix through 3 small incisions. Has replaced traditional open surgery for all types of appendicitis — simple, complicated, and even ruptured. Duration: 20-40 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Acute appendicitis (emergency)`,
                        `Recurrent appendicitis (repeated attacks)`,
                        `Appendicular lump (after initial antibiotics)`,
                        `Ruptured/perforated appendix`,
                        `Appendicular abscess`,
                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Day</td>
                                <td>Progress</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Day 0</td>
                                <td>Walk within 4 hours, clear liquids</td>
                                </tr>
                                <tr>
                                <td>Day 1</td>
                                <td>Soft diet, discharge (simple cases)</td>
                                </tr>
                                <tr>
                                <td>Day 2-3</td>
                                <td>Discharge (complicated cases)</td>
                                </tr>
                                <tr>
                                <td>Day 5-7</td>
                                <td>Back to office/school</td>
                                </tr>
                                <tr>
                                <td>Day 14</td>
                                <td>Normal activities</td>
                                </tr>
                                <tr>
                                <td>Day 21</td>
                                <td>Full physical activity</td>
                                </tr>
                            </tbody>
                            </table>                
                    ]
                    },
                                  
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Even ruptured/gangrenous appendix managed laparoscopically. Conversion to open surgery <2%. Complete abdominal washout done through same ports for complicated cases.`

                    }
                ]
    },
     {
        title: "Laparoscopic Hernia Repair (TEP/TAPP)",
        navTo:'laparoscopic-hernia-repair',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Minimally invasive hernia repair where a synthetic mesh is placed behind the abdominal wall through 3 small incisions to reinforce the weak area permanently. Two techniques: TEP (mesh placed outside peritoneum) and TAPP (mesh placed through abdomen). Duration: 45-60 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Inguinal hernia (groin — most common)`,
                        `Bilateral inguinal hernia (both sides — single sitting)`,
                        `Recurrent hernia (failed previous open repair)`,
                        `Umbilical hernia`,
                        `Incisional hernia (hernia at surgery scar)`,
                        `Femoral hernia`,
                        `Sportsman's hernia`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Day</td>
                                <td>Progress</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Day 0</td>
                                <td>Walk within 4 hours</td>
                                </tr>
                                <tr>
                                <td>Day 1</td>
                                <td>Normal diet, discharge</td>
                                </tr>
                                <tr>
                                <td>Day 3-5</td>
                                <td>Light daily activities</td>
                                </tr>
                                <tr>
                                <td>Day 7-10</td>
                                <td>Back to office work</td>
                                </tr>
                                <tr>
                                <td>Day 21</td>
                                <td>Moderate physical activity</td>
                                </tr>
                                <tr>
                                <td>Day 45-60</td>
                                <td>Heavy lifting allowed</td>
                                </tr>
                            </tbody>
                            </table>               
                    ]
                    },
                    {
                        type:'heading',
                        content:'Laparoscopic vs Open:'
                    },
                    {
                        type:'table',
                        content:[
                             <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Factor</td>
                                <td>Laparoscopic</td>
                                <td>Open</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Incision</td>
                                <td>3 holes (5-10mm)</td>
                                <td>6-8cm cut</td>
                                </tr>
                                <tr>
                                <td>Pain</td>
                                <td>Minimal</td>
                                <td>Moderate-significant</td>
                                </tr>
                                <tr>
                                <td>Return to Work</td>
                                <td>7-10 days</td>
                                <td>4-6 weeks</td>
                                </tr>
                                <tr>
                                <td>Bilateral Repair</td>
                                <td>Single sitting</td>
                                <td>Two separate surgeries</td>
                                </tr>
                                <tr>
                                <td>Recurrence Rate</td>
                                <td>&lt;1%</td>
                                <td>5-10%</td>
                                </tr>
                                <tr>
                                <td>Chronic Pain</td>
                                <td>Rare</td>
                                <td>10-15% patients</td>
                                </tr>
                            </tbody>
                            </table>                        

                        ]
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Both TEP and TAPP mastered. Bilateral hernias in single sitting (saves patient from second surgery). Lightweight mesh for comfort. Recurrence rate <1%. Experts in complex and recurrent hernia repairs.`

                    }
                ]
    },

     {
        title: "Laparoscopic Nephrectomy (Kidney Removal)",
        navTo:'laparoscopic-nephrectomy',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Minimally invasive removal of non-functioning or diseased kidney through 3-4 small incisions. Replaces the traditional large flank incision that was extremely painful. Duration: 60-90 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Non-functioning kidney (from chronic obstruction/stones)`,
                        `Pyonephrosis (infected, pus-filled kidney)`,
                        `Recurrent kidney infections not responding to treatment`,
                        `Small kidney tumors (radical nephrectomy)`,
                        `Severely damaged kidney from trauma`,
                        `Kidney donation (donor nephrectomy)`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0-1</td>
                            <td>ICU monitoring, IV fluids</td>
                            </tr>
                            <tr>
                            <td>Day 2</td>
                            <td>Shift to ward, soft diet</td>
                            </tr>
                            <tr>
                            <td>Day 3-5</td>
                            <td>Discharge</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Follow-up, light activities</td>
                            </tr>
                            <tr>
                            <td>Day 30</td>
                            <td>Normal activities</td>
                            </tr>
                            <tr>
                            <td>Day 45-60</td>
                            <td>Full physical activity</td>
                            </tr>
                        </tbody>
                        </table>               
                    ]
                    },
                   
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Minimal blood loss. Hospital stay 3-5 days (vs 7-10 for open). Both simple and radical nephrectomy laparoscopically. Careful vessel control for safe kidney removal.`

                    }
                ]
    },
     {
        title: "Diagnostic Laparoscopy",
        navTo:'diagnostic-laparoscopy',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `A minimally invasive diagnostic procedure where a camera is inserted through a small incision near the navel to directly visualize all abdominal organs. Used when CT, ultrasound, and blood tests cannot give a definitive diagnosis. Often converts to therapeutic (treatment) laparoscopy in the same sitting. Duration: 20-45 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Unexplained chronic abdominal pain`,
                        `Staging of abdominal cancers (stomach, liver, ovarian)`,
                        `Peritoneal tuberculosis diagnosis (biopsy under vision)`,
                        `Evaluation of liver disease (guided liver biopsy)`,
                        `Unexplained ascites (fluid in abdomen)`,
                        `Assessment of abdominal trauma`,
                        `Female infertility evaluation (tubal patency, endometriosis)`,
                        `Second-look after cancer treatment`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                        <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0</td>
                            <td>Walk within 2-3 hours, discharge same day possible</td>
                            </tr>
                            <tr>
                            <td>Day 1</td>
                            <td>Normal diet, mild discomfort</td>
                            </tr>
                            <tr>
                            <td>Day 3</td>
                            <td>Resume daily activities</td>
                            </tr>
                            <tr>
                            <td>Day 7</td>
                            <td>Follow-up with biopsy results</td>
                            </tr>
                        </tbody>
                        </table>                   
                    ]
                    },
                   
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`"See and treat" approach — if treatable condition found during diagnostic laparoscopy, it is treated immediately in the same sitting (no second surgery needed). Biopsy under direct vision ensures accurate tissue sampling.`

                    }
                ]
    },
     {
        title: "Laparoscopic Adhesiolysis",
        navTo:'laparoscopic-adhesiolysis',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Laparoscopic cutting and release of adhesions (scar tissue bands) that form inside the abdomen after previous surgeries or infections. These adhesions can cause chronic pain, intestinal obstruction, and infertility. Duration: 30-90 minutes (depends on adhesion severity).`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Chronic abdominal pain after previous surgery`,
                        `Recurrent intestinal obstruction from adhesions`,
                        `Infertility caused by pelvic adhesions`,
                        `Adhesions causing kinking/twisting of intestines`,
                        `Failed medical management of adhesion-related symptoms`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0-1</td>
                            <td>Observation for bowel function return</td>
                            </tr>
                            <tr>
                            <td>Day 2-3</td>
                            <td>Discharge when eating normally</td>
                            </tr>
                            <tr>
                            <td>Day 7-10</td>
                            <td>Light activities</td>
                            </tr>
                            <tr>
                            <td>Day 21</td>
                            <td>Normal activities</td>
                            </tr>
                        </tbody>
                        </table>

                 
                    ]
                    },
                   
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Delicate technique to avoid bowel injury. Meticulous adhesion separation preserving organ function. Anti-adhesion barriers used to prevent re-formation.`

                    }
                ]
    },
     {
        title: "Laser Piles Surgery (Laser Hemorrhoidoplasty)",
        navTo:'laser-piles-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Modern, painless treatment for hemorrhoids using LASER energy. The LASER fiber is inserted directly into the hemorrhoidal tissue, sealing blood vessels and causing the hemorrhoid to shrink — without any cutting, without stitches, without wounds. This is the most advanced piles treatment available today. Duration: 15-30 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Grade 2 piles (prolapsing but self-reducing) not responding to medicines`,
                        `Grade 3 piles (need manual pushing after bowel movement)`,
                        `Grade 4 piles (permanently prolapsed)`,
                        `Bleeding piles causing anemia`,
                        `Failed rubber band ligation or injection therapy`,
                        `Patients wanting painless, quick-recovery treatment`,
                        `Working professionals who cannot take long leave`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                        <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0</td>
                            <td>Walk out of hospital within 2-3 hours</td>
                            </tr>
                            <tr>
                            <td>Day 1</td>
                            <td>Normal diet, mild discomfort only</td>
                            </tr>
                            <tr>
                            <td>Day 2-3</td>
                            <td>Back to office work</td>
                            </tr>
                            <tr>
                            <td>Day 7</td>
                            <td>Follow-up visit, almost fully recovered</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Complete recovery</td>
                            </tr>
                        </tbody>
                        </table>

                 
                    ]
                    },
                    {
                        type:'heading',
                        content:'Laser vs Traditional (Hemorrhoidectomy)'
                    },
                    {
                        type:'table',
                        content:[
                             <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Factor</td>
                                <td>Laser (Dr. Rajeev)</td>
                                <td>Traditional Open</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Pain</td>
                                <td>Painless / Minimal</td>
                                <td>Severe pain 2-3 weeks</td>
                                </tr>
                                <tr>
                                <td>Wound</td>
                                <td>No wound</td>
                                <td>Open wound requiring dressing</td>
                                </tr>
                                <tr>
                                <td>Bleeding</td>
                                <td>Almost none</td>
                                <td>Moderate</td>
                                </tr>
                                <tr>
                                <td>Hospital Stay</td>
                                <td>Daycare (4-6 hours)</td>
                                <td>2-3 days</td>
                                </tr>
                                <tr>
                                <td>Return to Work</td>
                                <td>2-3 days</td>
                                <td>2-3 weeks</td>
                                </tr>
                                <tr>
                                <td>Incontinence Risk</td>
                                <td>Zero</td>
                                <td>1-2% risk</td>
                                </tr>
                                <tr>
                                <td>Dressing Needed</td>
                                <td>No</td>
                                <td>Daily for 2-3 weeks</td>
                                </tr>
                                <tr>
                                <td>Recurrence</td>
                                <td>&lt;5%</td>
                                <td>5-8%</td>
                                </tr>
                            </tbody>
                            </table>

                       

                        ]
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Pioneer of LASER Proctology in Prayagraj. Latest generation Diode LASER technology. Thousands of successful painless procedures. Patients from across UP, Bihar, MP come for his LASER expertise.`

                    }
                ]
    },

     {
        title: "Laser Fissure Surgery (Laser Fissurectomy)",
        navTo:'laser-fissure-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Painless LASER treatment for chronic anal fissure (non-healing tear) combined with controlled internal sphincterotomy (relaxing the tight muscle). LASER precisely treats the fissure while preserving surrounding healthy tissue. Duration: 15-20 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Chronic fissure not healed with medicines for 6+ weeks`,
                        `Fissure with sentinel skin tag`,
                        `Recurrent fissure after medical treatment`,
                        `Fissure with associated hemorrhoids`,
                        `Patients wanting painless alternative to conventional surgery`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                             <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Day</td>
                                <td>Progress</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Day 0</td>
                                <td>Walk home within 2-3 hours</td>
                                </tr>
                                <tr>
                                <td>Day 1</td>
                                <td>Mild discomfort, normal diet with fiber</td>
                                </tr>
                                <tr>
                                <td>Day 2-3</td>
                                <td>Return to work</td>
                                </tr>
                                <tr>
                                <td>Day 7</td>
                                <td>Follow-up, significant improvement</td>
                                </tr>
                                <tr>
                                <td>Day 14-21</td>
                                <td>Complete healing</td>
                                </tr>
                            </tbody>
                            </table>

                 
                    ]
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Precision LASER technique — no tissue cutting. Zero risk of incontinence (vs 1-2% with open surgery). Combined fissure + hemorrhoid treatment in single sitting possible.`

                    }
                ]
    },
     {
        title: "Laser Fistula Surgery (FiLaC — Fistula Laser Closure)",
        navTo:'laser-fistula-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `FiLaC (Fistula tract Laser Closure) is a sphincter-sparing LASER technique where a radial-emitting LASER fiber is passed through the fistula tract, destroying the tract lining from inside and causing it to collapse and heal. No cutting of sphincter muscle means zero risk of incontinence. Duration: 20-30 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Simple fistula-in-ano`,
                        `Complex/high fistula where sphincter preservation is critical`,
                        `Recurrent fistula (failed previous conventional surgery)`,
                        `Horseshoe fistula`,
                        `Patients who fear incontinence from conventional fistula surgery`,
                        `Patients wanting faster recovery`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0</td>
                            <td>Discharge same day</td>
                            </tr>
                            <tr>
                            <td>Day 1-2</td>
                            <td>Mild discharge from wound (normal healing)</td>
                            </tr>
                            <tr>
                            <td>Day 3-5</td>
                            <td>Return to light work</td>
                            </tr>
                            <tr>
                            <td>Day 7</td>
                            <td>Follow-up</td>
                            </tr>
                            <tr>
                            <td>Day 30-45</td>
                            <td>Complete tract healing</td>
                            </tr>
                        </tbody>
                        </table>

               
                    ]
                    },
                    {
                        type:'heading',
                        content:'Laser FiLaC vs Traditional Fistulotomy:'
                    },
                    {
                        type:'table',
                        content:[
                             <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Factor</td>
                                <td>Laser FiLaC</td>
                                <td>Traditional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Sphincter Cut</td>
                                <td> No</td>
                                <td> Yes (partial/full)</td>
                                </tr>
                                <tr>
                                <td>Incontinence Risk</td>
                                <td>Zero</td>
                                <td>5-30% (depending on complexity)</td>
                                </tr>
                                <tr>
                                <td>Wound</td>
                                <td>Tiny/None</td>
                                <td>Large open wound</td>
                                </tr>
                                <tr>
                                <td>Healing Time</td>
                                <td>4-6 weeks</td>
                                <td>8-12 weeks</td>
                                </tr>
                                <tr>
                                <td>Pain</td>
                                <td>Minimal</td>
                                <td>Significant</td>
                                </tr>
                                <tr>
                                <td>Dressing</td>
                                <td>Minimal</td>
                                <td>Daily for weeks</td>
                                </tr>
                                <tr>
                                <td>Recurrence</td>
                                <td>15-20%</td>
                                <td>5-10% (but with sphincter damage)</td>
                                </tr>
                            </tbody>
                            </table>

                         

                        ]
                    },
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`For complex fistulas, Dr. Rajeev Singh combines LASER with LIFT procedure or advancement flap for best results. Sphincter preservation is always the priority — protecting patient's quality of life.`

                    }
                ]
    },
     {
        title: "Laser Pilonidal Sinus Treatment",
        navTo:'laser-pilonidal-sinus',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Minimally invasive LASER treatment for pilonidal sinus — the LASER fiber is inserted into the sinus tract, destroying infected tissue and hair debris from inside, causing the tract to collapse and heal. Small incision, minimal wound, fast recovery compared to traditional wide excision surgery. Duration: 20-30 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Recurrent pilonidal sinus infections`,
                        `Pilonidal abscess (after initial drainage)`,
                        `Chronic draining sinus at tailbone`,
                        `Failed previous pilonidal surgery (recurrence)`,
                        `Patients wanting minimal scarring and fast recovery`,
                        `Working professionals / students who cannot take long leave`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                              <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Day</td>
                                <td>Progress</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Day 0</td>
                                <td>Discharge same day</td>
                                </tr>
                                <tr>
                                <td>Day 1-3</td>
                                <td>Mild discomfort sitting, minimal wound care</td>
                                </tr>
                                <tr>
                                <td>Day 5-7</td>
                                <td>Return to work (sitting comfortable)</td>
                                </tr>
                                <tr>
                                <td>Day 14</td>
                                <td>Follow-up, wound almost healed</td>
                                </tr>
                                <tr>
                                <td>Day 21-30</td>
                                <td>Complete healing</td>
                                </tr>
                            </tbody>
                            </table>

                
                    ]
                    },
                    {
                        type:'heading',
                        content:'Laser vs Traditional Wide Excision'
                    },
                    {
                        type:'table',
                        content:[
                            <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Factor</td>
                                <td>Laser</td>
                                <td>Wide Excision</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Wound Size</td>
                                <td>Tiny (few mm)</td>
                                <td>5-10cm open wound</td>
                                </tr>
                                <tr>
                                <td>Healing Time</td>
                                <td>3-4 weeks</td>
                                <td>8-12 weeks</td>
                                </tr>
                                <tr>
                                <td>Daily Dressing</td>
                                <td>1 week</td>
                                <td>6-8 weeks</td>
                                </tr>
                                <tr>
                                <td>Return to Work</td>
                                <td>5-7 days</td>
                                <td>4-6 weeks</td>
                                </tr>
                                <tr>
                                <td>Recurrence</td>
                                <td>5-10%</td>
                                <td>15-30%</td>
                                </tr>
                                <tr>
                                <td>Scarring</td>
                                <td>Minimal</td>
                                <td>Large scar</td>
                                </tr>
                            </tbody>
                            </table>

                           

                        ]
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`For complex/recurrent cases, Dr. Rajeev Singh combines LASER with Limberg Flap or Bascom's procedure for lowest recurrence rates. Personalized treatment plan based on sinus complexity.`

                    }
                ]
    },
     {
        title: "EVLT — Varicose Veins Treatment",
        navTo:'evlt-varicose-veins',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `EVLT is a minimally invasive LASER treatment for varicose veins where a thin LASER fiber is inserted into the diseased vein through a needle puncture under ultrasound guidance. LASER energy heats and seals the vein from inside, causing it to close permanently. Blood automatically reroutes through healthy veins. No surgical incision. Duration: 30-45 minutes per leg.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                            `Visible bulging varicose veins on legs`,
                            `Leg pain, heaviness, and swelling from varicose veins`,
                            `Skin color changes near ankles (pigmentation)`,
                            `Venous eczema/dermatitis`,
                            `Bleeding from varicose veins`,
                            `Venous leg ulcer (non-healing wound)`,
                            `Failed compression stockings / medication therapy`,
                            `Superficial thrombophlebitis (inflamed varicose veins)`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0</td>
                            <td>Walk out immediately after procedure, go home same day</td>
                            </tr>
                            <tr>
                            <td>Day 1</td>
                            <td>Normal walking, wear compression stockings</td>
                            </tr>
                            <tr>
                            <td>Day 3-5</td>
                            <td>Return to work</td>
                            </tr>
                            <tr>
                            <td>Day 7</td>
                            <td>Follow-up Doppler ultrasound</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Resume all activities</td>
                            </tr>
                            <tr>
                            <td>Day 30</td>
                            <td>Compression stockings can be removed</td>
                            </tr>
                        </tbody>
                        </table>

                  
                    ]
                    },
                    {
                        type:'heading',
                        content:'EVLT vs Traditional Stripping Surgery'
                    },
                    {
                        type:'table',
                        content:[
                             <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Factor</td>
                                <td>EVLT Laser</td>
                                <td>Vein Stripping</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Anesthesia</td>
                                <td>Local only</td>
                                <td>Spinal/General</td>
                                </tr>
                                <tr>
                                <td>Incision</td>
                                <td>Needle puncture only</td>
                                <td>Multiple cuts on leg</td>
                                </tr>
                                <tr>
                                <td>Hospital Stay</td>
                                <td>Walk-in / Walk-out</td>
                                <td>2-3 days</td>
                                </tr>
                                <tr>
                                <td>Pain</td>
                                <td>Minimal</td>
                                <td>Significant</td>
                                </tr>
                                <tr>
                                <td>Bruising</td>
                                <td>Minimal</td>
                                <td>Extensive</td>
                                </tr>
                                <tr>
                                <td>Return to Work</td>
                                <td>3-5 days</td>
                                <td>2-4 weeks</td>
                                </tr>
                                <tr>
                                <td>Recurrence</td>
                                <td>3-5%</td>
                                <td>10-25%</td>
                                </tr>
                                <tr>
                                <td>Scarring</td>
                                <td>No scar</td>
                                <td>Multiple scars</td>
                                </tr>
                            </tbody>
                            </table>                        

                        ]
                    },
                     {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Ultrasound-guided precision for accurate vein closure. Combined EVLT + Sclerotherapy + Phlebectomy for complete treatment in single sitting. Both legs treatable in same session.`

                    }
                ]
    },
     {
        title: "PCNL (Percutaneous Nephrolithotomy) — Large Kidney Stone Removal",
        navTo:'pcnl',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `PCNL is a minimally invasive surgery for removing large kidney stones (>2cm) through a small 1cm puncture in the back directly into the kidney. A nephroscope (small camera) and LASER/ultrasonic lithotripter breaks and removes stones. This replaces the old open kidney surgery that required a 15-20cm cut. Duration: 45-90 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Kidney stones >2cm (too large for URSL/ESWL)`,
                        `Staghorn calculus (large stone filling entire kidney)`,
                        `Multiple kidney stones`,
                        `Failed ESWL (shock wave therapy)`,
                        `Stones in lower pole of kidney (difficult for ESWL)`,
                        `Stones causing hydronephrosis (kidney swelling)`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                        <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0-1</td>
                            <td>Bed rest, nephrostomy tube in place</td>
                            </tr>
                            <tr>
                            <td>Day 2</td>
                            <td>Tube removed if no residual stones</td>
                            </tr>
                            <tr>
                            <td>Day 3-4</td>
                            <td>Discharge</td>
                            </tr>
                            <tr>
                            <td>Day 7</td>
                            <td>Follow-up, X-ray to confirm stone clearance</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Light activities</td>
                            </tr>
                            <tr>
                            <td>Day 30</td>
                            <td>Normal activities</td>
                            </tr>
                        </tbody>
                        </table>

            
                    ]
                    },
                    {
                        type:'heading',
                        content:'PCNL vs Open Surgery'
                    },
                    {
                        type:'table',
                        content:[
                            <table className="table table-striped border mt-4 mb-4">	
                            <thead>
                                <tr>
                                <td>Factor</td>
                                <td>PCNL (Dr. Rajeev)</td>
                                <td>Open Surgery</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Incision</td>
                                <td>1cm puncture</td>
                                <td>15-20cm cut</td>
                                </tr>
                                <tr>
                                <td>Hospital Stay</td>
                                <td>3-4 days</td>
                                <td>7-10 days</td>
                                </tr>
                                <tr>
                                <td>Return to Work</td>
                                <td>2 weeks</td>
                                <td>6-8 weeks</td>
                                </tr>
                                <tr>
                                <td>Blood Loss</td>
                                <td>Minimal</td>
                                <td>Significant</td>
                                </tr>
                                <tr>
                                <td>Stone Clearance</td>
                                <td>95%+</td>
                                <td>95%+</td>
                                </tr>
                                <tr>
                                <td>Scarring</td>
                                <td>Tiny dot</td>
                                <td>Large flank scar</td>
                                </tr>
                            </tbody>
                            </table>


                        ]
                    },
                     {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Tubeless/Mini-PCNL for smaller puncture and faster recovery. LASER lithotripsy for hardest stones. Both kidneys treatable in single sitting when needed.`

                    }
                ]
    },
     {
        title: "URSL (Ureteroscopic Lithotripsy) — Ureteral Stone Removal",
        navTo:'ursl',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `URSL is a minimally invasive, scarless procedure for removing stones stuck in the ureter (tube between kidney and bladder). A thin ureteroscope is passed through the urine passage — no incision needed at all. LASER energy (Holmium LASER) fragments the stone into tiny pieces which are flushed out. Duration: 30-60 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Ureteral stones (any location — upper, mid, lower ureter)`,
                        `Stones not passing naturally after 4-6 weeks`,
                        `Stones causing severe pain (renal colic)`,
                        `Stones causing infection with obstruction (emergency)`,
                        `Failed ESWL`,
                        `Stones 5-20mm in ureter`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0</td>
                            <td>Walk within 2-3 hours, discharge same day possible</td>
                            </tr>
                            <tr>
                            <td>Day 1</td>
                            <td>Normal diet, mild burning during urination (temporary)</td>
                            </tr>
                            <tr>
                            <td>Day 3-5</td>
                            <td>Return to work</td>
                            </tr>
                            <tr>
                            <td>Day 7-14</td>
                            <td>DJ stent removal (if placed)</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Fully normal</td>
                            </tr>
                        </tbody>
                        </table>

                 
                    ]
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Flexible ureteroscopy available for difficult-to-reach stones. Holmium LASER for even the hardest stones. DJ stent-free technique when possible (less post-op discomfort). Same-day discharge for most patients.`

                    }
                ]
    },
     {
        title: "Laser Circumcision",
        navTo:'laser-circumcision',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Modern circumcision using LASER or Stapler technology — painless, bloodless, precise procedure for removing the foreskin. Takes only 15-20 minutes with immediate cosmetic result. Far superior to traditional surgical circumcision in terms of pain, bleeding, and healing. Duration: 15-20 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Phimosis (tight foreskin that cannot retract)`,
                        `Recurrent balanitis (foreskin infections)`,
                        `Paraphimosis (emergency — foreskin stuck behind glans)`,
                        `BXO (Balanitis Xerotica Obliterans — scarring of foreskin)`,
                        `Religious/cultural circumcision`,
                        `Elective circumcision for hygiene`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                            <tr>
                            <td>Day 0</td>
                            <td>Walk out within 1 hour, minimal dressing</td>
                            </tr>
                            <tr>
                            <td>Day 1-3</td>
                            <td>Mild swelling (normal), take prescribed medicines</td>
                            </tr>
                            <tr>
                            <td>Day 5-7</td>
                            <td>Return to work/school</td>
                            </tr>
                            <tr>
                            <td>Day 10-14</td>
                            <td>Swelling resolves, follow-up</td>
                            </tr>
                            <tr>
                            <td>Day 21-30</td>
                            <td>Complete healing, excellent cosmetic result</td>
                            </tr>
                        </tbody>
                        </table>

                  
                    ]
                    },
                    {
                        type:'heading',
                        content:'Laser/Stapler vs Traditional'
                    },
                    {
                        type:'table',
                        content:[
                             <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Factor</td>
                                <td>Laser/Stapler</td>
                                <td>Traditional</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Duration</td>
                                <td>15-20 min</td>
                                <td>45-60 min</td>
                                </tr>
                                <tr>
                                <td>Bleeding</td>
                                <td>Almost zero</td>
                                <td>Moderate</td>
                                </tr>
                                <tr>
                                <td>Pain</td>
                                <td>Minimal</td>
                                <td>Moderate</td>
                                </tr>
                                <tr>
                                <td>Sutures</td>
                                <td>Absorbable/None</td>
                                <td>Manual stitches</td>
                                </tr>
                                <tr>
                                <td>Healing</td>
                                <td>2-3 weeks</td>
                                <td>4-6 weeks</td>
                                </tr>
                                <tr>
                                <td>Cosmetic Result</td>
                                <td>Excellent, even</td>
                                <td>Variable</td>
                                </tr>
                            </tbody>
                            </table>


                        ]
                    },
                     {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`100+ circumcisions annually. Both LASER and Stapler techniques available — best method chosen based on patient anatomy. Even complex cases (BXO, paraphimosis) managed expertly.`

                    }
                ]
    },
     {
        title: "Hydrocelectomy",
        navTo:'hydrocelectomy',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Surgical drainage and repair of hydrocele (fluid collection around testicle causing scrotal swelling). Done through a small incision on the scrotum. The fluid is drained and the sac is treated to prevent recurrence (eversion or excision technique). Duration: 30-45 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Hydrocele causing discomfort or cosmetic concern`,
                        `Large hydrocele affecting daily activities`,
                        `Hydrocele progressively increasing in size`,
                        `Reactive hydrocele from infection/injury`,
                        `Hydrocele in adults (does not resolve spontaneously)`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0</td>
                            <td>Discharge same day, scrotal support/jockstrap</td>
                            </tr>
                            <tr>
                            <td>Day 1-3</td>
                            <td>Rest, ice application, mild swelling</td>
                            </tr>
                            <tr>
                            <td>Day 7</td>
                            <td>Follow-up, suture check</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Swelling reducing, light activities</td>
                            </tr>
                            <tr>
                            <td>Day 21-30</td>
                            <td>Complete recovery</td>
                            </tr>
                        </tbody>
                        </table>

                
                    ]
                    },
                   
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Jaboulay's/Lord's eversion technique for lowest recurrence rate. Always evaluates for underlying causes (tumor, infection) before surgery. Daycare procedure — discharge same day.`

                    }
                ]
    },
     {
        title: "Varicocelectomy (Varicocele Repair)",
        navTo:'varicocelectomy',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Surgical ligation (tying off) of enlarged scrotal veins that are causing pain, testicular shrinkage, or infertility. Can be performed laparoscopically or through a small inguinal incision with microscopic magnification. Duration: 30-45 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Varicocele causing pain`,
                        `Abnormal semen analysis (low count, poor motility)`,
                        `Couple unable to conceive (male factor infertility)`,
                        `Testicular atrophy (shrinkage) on affected side`,
                        `Bilateral varicoceles`,
                        `Failed conservative management`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0-1</td>
                            <td>Discharge, scrotal support</td>
                            </tr>
                            <tr>
                            <td>Day 3-5</td>
                            <td>Return to light work</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Normal activities</td>
                            </tr>
                            <tr>
                            <td>Day 30</td>
                            <td>Full physical activity</td>
                            </tr>
                            <tr>
                            <td>3-6 Months</td>
                            <td>Semen analysis repeat — improvement expected</td>
                            </tr>
                        </tbody>
                        </table>

                
                    ]
                    },
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Laparoscopic varicocelectomy — artery-sparing technique. Microscopic precision for lowest recurrence rate. 60-70% patients show significant semen improvement within 6 months.`

                    }
                ]
    },
     {
        title: "TURP (Transurethral Resection of Prostate)",
        navTo:'turp',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `TURP is the gold-standard surgery for enlarged prostate (BPH) causing urinary obstruction. A resectoscope is passed through the urine passage (no external incision) to remove the obstructing prostate tissue from inside. Restores normal urine flow immediately. Duration: 45-60 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Enlarged prostate not responding to medications`,
                        `Acute urinary retention (emergency catheter-dependent)`,
                        `Recurrent urinary tract infections from prostate`,
                        `Bladder stones from prostatic obstruction`,
                        `Kidney damage from chronic obstruction`,
                        `Gross hematuria (bleeding) from prostate`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                      <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0-1</td>
                            <td>Catheter in place, continuous bladder irrigation</td>
                            </tr>
                            <tr>
                            <td>Day 2-3</td>
                            <td>Catheter removed, trial voiding</td>
                            </tr>
                            <tr>
                            <td>Day 3-5</td>
                            <td>Discharge when voiding well</td>
                            </tr>
                            <tr>
                            <td>Day 7</td>
                            <td>Follow-up, uroflowmetry</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Light activities</td>
                            </tr>
                            <tr>
                            <td>Day 30</td>
                            <td>Normal activities, significant improvement in flow</td>
                            </tr>
                            <tr>
                            <td>Day 60</td>
                            <td>Full recovery, maximum improvement</td>
                            </tr>
                        </tbody>
                        </table>                 
                    ]
                    },
                   
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Bipolar TURP for enhanced safety (no TUR syndrome risk). Complete tissue removal for maximum flow improvement. Uroflowmetry available at Narayan Swaroop Hospital for pre/post assessment.`

                    }
                ]
    },
     {
        title: "Thyroid Surgery (Thyroidectomy)",
        navTo:'thyroid-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Surgical removal of part (lobectomy) or entire (total thyroidectomy) thyroid gland. Performed for thyroid nodules, goiter, thyroid cancer, and hyperthyroidism not responding to medications. Requires expert surgical precision due to proximity of vocal cord nerves and parathyroid glands. Duration: 60-120 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Thyroid nodules suspicious for cancer (FNAC/Biopsy confirmed)`,
                        `Confirmed thyroid cancer`,
                        `Large goiter causing breathing/swallowing difficulty`,
                        `Multinodular goiter`,
                        `Toxic goiter (hyperthyroidism not responding to medicines)`,
                        `Recurrent thyroid cysts`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0</td>
                            <td>Observation, check voice quality</td>
                            </tr>
                            <tr>
                            <td>Day 1-2</td>
                            <td>Discharge, soft diet</td>
                            </tr>
                            <tr>
                            <td>Day 7</td>
                            <td>Suture removal, voice check</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Normal diet and activities</td>
                            </tr>
                            <tr>
                            <td>Day 30</td>
                            <td>Full recovery, thyroid hormone dose adjusted</td>
                            </tr>
                        </tbody>
                        </table>               
                    ]
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Nerve monitoring technique to protect vocal cord nerves. Minimal neck scar in natural skin crease. Expert parathyroid preservation (prevents calcium problems post-surgery).`

                    }
                ]
    },
     {
        title: "Breast Surgery",
        navTo:'breast-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Surgical procedures for breast lumps, breast cancer, and breast-related conditions. Ranges from simple lump removal (lumpectomy) to modified radical mastectomy for cancer. Early detection and surgical treatment significantly improves survival in breast cancer. Duration: 30-120 minutes (depends on procedure).`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Breast lump (biopsy/excision for diagnosis)`,
                        `Confirmed breast cancer (lumpectomy or mastectomy)`,
                        `Breast abscess not responding to antibiotics`,
                        `Fibroadenoma (benign tumor removal)`,
                        `Gynecomastia in males (male breast enlargement)`,
                        `Breast reconstruction after cancer surgery`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                             <table className="table table-striped border mt-4 mb-4">
                            <thead>
                                <tr>
                                <td>Day</td>
                                <td>Progress</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Lump Excision</td>
                                <td>Discharge same day, 3-5 days recovery</td>
                                </tr>
                                <tr>
                                <td>Mastectomy Day 0-2</td>
                                <td>Drain in place, observation</td>
                                </tr>
                                <tr>
                                <td>Mastectomy Day 5-7</td>
                                <td>Drain removal, discharge</td>
                                </tr>
                                <tr>
                                <td>Day 14</td>
                                <td>Suture check, histopathology report discussion</td>
                                </tr>
                                <tr>
                                <td>Day 21-30</td>
                                <td>Oncology consultation if cancer confirmed</td>
                                </tr>
                            </tbody>
                            </table>

                   
                    ]
                    },
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Triple assessment approach (Clinical + Imaging + FNAC) for accurate diagnosis. Oncoplastic techniques for better cosmetic outcome. Multidisciplinary cancer board coordination with oncologist at Narayan Swaroop Hospital.`

                    }
                ]
    },
     {
        title: "Trauma & Emergency Surgery",
        navTo:'trauma-emergency-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Emergency surgical management of injuries from road accidents, falls, assaults, and other trauma. Includes emergency exploratory laparotomy, damage control surgery, fracture fixation coordination, and post-trauma reconstruction. Narayan Swaroop Hospital provides 24/7 trauma care with dedicated trauma team. Duration: Variable — depends on injury severity.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Road traffic accident (RTA) victims`,
                        `Fall from height injuries`,
                        `Stab/penetrating abdominal injuries`,
                        `Blunt abdominal trauma (organ damage)`,
                        `Head injuries (coordinated with neurosurgeon)`,
                        `Fractures (coordinated with orthopedic surgeon)`,
                        `Crush injuries`,
                        `Burns requiring surgical management`,
                    ]
                    },
                    {
                    type: "heading",
                    content: "Trauma Facilities at Narayan Swaroop Hospital"
                    },
                    {
                    type: "list",
                    items: [
                        `24/7 Emergency department with trauma-trained staff`,
                        `Dedicated trauma operation theatre`,
                        `ICU with ventilator support`,
                        `Blood bank connectivity`,
                        `CT scan available round-the-clock`,
                        `Modular operation theatre`,
                        `Ambulance service (24 hours)`,
                    ]
                    },
                     
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`As Director of Narayan Swaroop Hospital, Dr. Rajeev Singh has built a complete trauma care ecosystem. Multi-specialty team available 24/7 — surgery, orthopedics, neurosurgery, anesthesia, critical care — all under one roof.`

                    }
                ]
    },

     {
        title: "Colorectal Surgery",
        navTo:'colorectal-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Surgical treatment of diseases affecting the colon (large intestine) and rectum. Includes surgery for colorectal cancer, inflammatory bowel disease, diverticular disease, rectal prolapse, and colonic polyps. Can be performed laparoscopically for faster recovery. Duration: 60-180 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Colorectal cancer (confirmed or suspected)`,
                        `Large colonic polyps (not removable by colonoscopy)`,
                        `Diverticular disease with complications`,
                        `Rectal prolapse`,
                        `Inflammatory bowel disease (Ulcerative Colitis, Crohn's) requiring surgery`,
                        `Intestinal obstruction from tumor`,
                        `Sigmoid volvulus`,
                        `Colonic perforation`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "table",
                    content: [
                         <table className="table table-striped border mt-4 mb-4">
                        <thead>
                            <tr>
                            <td>Day</td>
                            <td>Progress</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Day 0-2</td>
                            <td>ICU/ward, nil by mouth, IV nutrition</td>
                            </tr>
                            <tr>
                            <td>Day 3-4</td>
                            <td>Clear liquids as bowel function returns</td>
                            </tr>
                            <tr>
                            <td>Day 5-7</td>
                            <td>Soft diet, discharge planning</td>
                            </tr>
                            <tr>
                            <td>Day 7-10</td>
                            <td>Discharge, histopathology results</td>
                            </tr>
                            <tr>
                            <td>Day 14</td>
                            <td>Follow-up, oncology referral if cancer</td>
                            </tr>
                            <tr>
                            <td>Day 30-45</td>
                            <td>Normal diet and activities</td>
                            </tr>
                        </tbody>
                        </table>

                 
                    ]
                    },
                   
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`FACRSI (Fellow, Association of Colon and Rectal Surgeons of India) — specialized training in colorectal surgery. Laparoscopic approach for faster recovery. Sphincter-preserving techniques to avoid permanent colostomy whenever possible.`

                    }
                ]
    },
     {
        title: "Gastrointestinal (GI) Surgery",
        navTo:'gi-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Surgical treatment of diseases affecting the entire gastrointestinal tract — stomach, small intestine, and large intestine. Includes surgery for perforations, obstructions, tumors, and bleeding. Both emergency and elective procedures. Duration: Variable — 30 minutes to 3 hours.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                            `Peptic ulcer perforation (emergency)`,
                            `Intestinal obstruction (emergency)`,
                            `Stomach/GI cancer`,
                            `GI bleeding not controlled by endoscopy`,
                            `Mesenteric ischemia (blocked blood supply to intestines)`,
                            `Small bowel tumors`,
                            `Meckel's diverticulum`,
                            `Intestinal tuberculosis requiring surgery`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Recovery"
                    },
                    {
                    type: "paragraph",
                    content: `Varies by procedure — ranges from 3-5 days for simple perforation repair to 7-14 days for cancer surgery with bowel anastomosis.`
                    },                   
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`FIAGES (Fellow, Indian Association of Gastrointestinal Endo Surgeons). Specializes in gastrointestinal surgery. Emergency GI surgery available 24/7 at Narayan Swaroop Hospital.`

                    }
                ]
    },
     {
        title: "Onco Surgery (Cancer Surgery)",
        navTo:'onco-surgery',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `Surgical treatment and management of various cancers — including biopsy, tumor excision, radical surgery, and palliative procedures. Cancer surgery is often the first and most critical step in cancer treatment, followed by chemotherapy and/or radiation as needed. Duration: Variable.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Confirmed cancer requiring surgical removal`,
                        `Suspicious lump/mass requiring biopsy`,
                        `Breast cancer (lumpectomy/mastectomy)`,
                        `Stomach/GI cancer`,
                        `Colorectal cancer`,
                        `Thyroid cancer`,
                        `Skin cancer`,
                        `Lymph node biopsy for cancer staging`,
                        `Palliative surgery (relieving obstruction/pain in advanced cancer)`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Cancer Care Team at Narayan Swaroop Hospital"
                    },
                    {
                    type: "list",
                    items: [
                        `Surgical Oncologist (Dr. Rajeev Singh)`,
                        `Medical Oncologist`,
                        `Radiologist (CT, MRI, PET-CT coordination)`,
                        `Pathologist (histopathology, FNAC)`,
                        `Anesthesiologist`,
                        `ICU team for post-operative care`,
                        `Nutritionist`,
                        `Counselor`,                                    
                    ]
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`R0 resection (complete tumor removal with clear margins) is always the goal. Laparoscopic cancer surgery for eligible patients (faster recovery). Multi-disciplinary tumor board approach. Compassionate, patient-centered cancer care.`

                    }
                ]
    },
     {
        title: "Upper GI Endoscopy (Gastroscopy)",
        navTo:'upper-gi-endoscopy',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `A diagnostic and therapeutic procedure where a thin, flexible tube with a camera (endoscope) is passed through the mouth to directly examine the food pipe (esophagus), stomach, and first part of small intestine (duodenum). Can also take biopsies, stop bleeding, remove polyps, and dilate strictures during the same procedure. Duration: 10-15 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                        `Persistent acidity/heartburn not responding to medicines`,
                        `Difficulty or painful swallowing`,
                        `Chronic nausea and vomiting`,
                        `Unexplained upper abdominal pain`,
                        `Vomiting blood or coffee-ground material`,
                        `Unexplained weight loss`,
                        `Anemia of unknown cause`,
                        `Screening for Barrett's Esophagus`,
                        `Follow-up of gastric ulcers`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Before the Procedure"
                    },
                    {
                    type: "list",
                    items: [
                       `Empty stomach (6-8 hours fasting)`,
                        `Throat numbing spray applied`,
                        `Mild sedation if needed (patient stays awake but relaxed)`,
                        `Procedure takes only 10-15 minutes`,
                        `Can eat within 1-2 hours after procedure`,
                 
                    ]
                    },
                    {
                        type:'heading',
                        content:'Recovery'
                    },
                    {
                        type:'paragraph',
                        content:'Immediate. Go home within 1-2 hours. Resume normal diet same day. Report available same day (biopsy results in 3-5 days).'
                    },
                  
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`HD endoscopy for detailed mucosal examination. Therapeutic endoscopy capabilities — biopsy, polypectomy, hemostasis (bleeding control), foreign body removal. Quick, comfortable procedure with expert handling.`

                    }
                ]
    },

     {
        title: "Colonoscopy",
        navTo:'colonoscopy',
        sections: [
                    {
                        type:'heading',
                        content:'Overview',
                    },

                    {
                    type: "paragraph",
                    content: `A diagnostic and therapeutic procedure where a long, flexible tube with a camera is passed through the anus to examine the entire large intestine (colon) and the end of the small intestine. Can detect polyps, cancer, inflammation, bleeding sources, and take biopsies. Duration: 20-30 minutes.`
                    },
                    {
                    type: "heading",
                    content: "Who Needs This"
                    },
                    {
                    type: "list",
                    items: [
                            `Rectal bleeding or blood in stool`,
                            `Change in bowel habits lasting >2 weeks`,
                            `Chronic diarrhea or constipation`,
                            `Unexplained abdominal pain`,
                            `Screening for colorectal cancer (recommended for everyone 45+)`,
                            `Family history of colon cancer`,
                            `Follow-up after polyp removal`,
                            `Unexplained iron deficiency anemia`,
                            `Inflammatory bowel disease monitoring`,

                    ]
                    },
                     {
                        type: "heading",
                        content: "Before the Procedure"
                    },
                    {
                        type:"list",
                        items:[
                            `Rectal bleeding or blood in stool`,
                            `Change in bowel habits lasting >2 weeks`,
                            `Chronic diarrhea or constipation`,
                            `Unexplained abdominal pain`,
                            `Screening for colorectal cancer (recommended for everyone 45+)`,
                            `Family history of colon cancer`,
                            `Follow-up after polyp removal`,
                            `Unexplained iron deficiency anemia`,
                            `Inflammatory bowel disease monitoring`,

                        ]
                    },
                    {
                        type:'heading',
                        content:'Recovery'
                    },
                    {
                        type:'paragraph',
                        content:'Rest for 2-3 hours after procedure. Mild bloating/cramping from air (resolves quickly). Normal diet same evening. Results discussed immediately (biopsy in 3-5 days).'
                    },
                    
                    {
                        type:'heading',
                        content:'Why Dr. Rajeev Singh:'
                    },
                    {
                        type:'paragraph',
                        content:`Complete cecal intubation rate >95% (reaches the entire colon). Polypectomy during same procedure (no separate surgery needed). Screening colonoscopy saves lives — Dr. Rajeev Singh advocates routine screening after age 45`

                    }
                ]
    }    
   
];

export default dummyData;