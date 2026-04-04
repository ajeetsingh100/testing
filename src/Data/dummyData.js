

const dummyData = [
    {
        title: "General Surgery",
        navTo:'general-surgery',
        sections: [
                    {
                        type:'highligh',
                        content:'Minimal Access and General Surgery',
                    },

                    {
                    type: "paragraph",
                    content: `The department of Surgery at Narayan Swaroop Hospital provides comprehensive round the clock surgical services.
                    The department provides all general surgical procedures as well as advanced laparoscopic surgeries.
                        Dr Rajeev Singh at Narayan Swaroop Hospital is doing general surgeries as well as advanced laparoscopic surgeries for past 15 years in the city of Prayagraj.`
                    },
                    {
                    type: "heading",
                    content: "Scope of Services"
                    },
                    {
                    type: "paragraph",
                    content: `General Surgeries provided:`
                    },
                    {
                    type: "list",
                    items: [
                        "Laparoscopic Cholecystectomy",
                        "Laparoscopic Diaphragmatic Hernia repair",
                        "PCNL (percutaneous nephrolithotomy)",
                        "TURP (Trans urethral resection of prostate)"
                    ]
                    },
                    {
                    type: "heading",
                    content: "Pre-operative Check-up (PAC"
                    },
                    {
                        type:'paragraph',
                        content:`Consultants of Internal Medicine are involved in preoperative checks in addition to anaesthetists to pick up & manage existing medical problem prior to surgical procedures as well as to take appropriate measures prior to surgeries. 
                        In some cases, consultants are required to manage co-morbid medical problems with surgical conditions. Super-specialists are also called preoperatively, intra operatively, post operatively or whenever required.`

                    }
                ]
    },
    {
         title: "Advance Laparoscopic Surgery",
         navTo:'advance-laparoscopic-surgery',
         sections:[
            {
                type:'paragraph',
                content:`Narayan Swaroop Hospital provides advanced laparoscopic surgery,
                 a minimally invasive surgery that offers patient a faster recovery. Surgeons use a laparoscope, a thin,
                lighted tube with a camera that enters the body through a small incision. 
                Laparoscopy is used in gynecologic procedures, appendectomy and hernia repair as well as other procedures`
            },
            {
                type:"highlight",
                content:'Less invasive, faster recovery!'
            },
            {
                type:'paragraph',
                content:`Minimal invasive and advanced laparoscopic surgeries provided:`
            },
            {
                type:'list',
                items:[
                        'Laparoscopic Cholecystectomy.',
                        'Laparoscopic Diaphragmatic Hernia repair',
                        'Laparoscopic excision of Hepatic hydatid cyst',
                        'Laparoscopic Appendisectomy',
                        'Laparoscopic Surgery for Appendicular Perforation',
                        'Laparoscopic Adhenolysis for Intestinal Obstruction',
                        'Laparoscopic Ureterolithotomy (for ureteric stone)',
                        'PCNL (percutaneous nephrolithotomy)',
                        'Cystolithopexy (Cystolitholapaxy – for urinary bladder stone)',
                        'TURP (Trans urethral resection of prostate)',
                        'Stapled Hemorrhoidectomy',
                        'Minimally Invasive Procedure for Piles & Fissure',
                ]
            }
         ]
    },
    {
        title:'Urology',
        navTo:'urology',
        sections:[
            {
                type:'paragraph',
                content:`Department of Urology at Narayan Swaroop Hospital offers comprehensive state-of-the-art medical and surgical care for adults and pediatric urology. 
                Our team of highly experienced surgeons is supported by the most advanced medical equipment. `
            },
            {
                type:"paragraph",
                content:`The team has successfully conducted numerous Renal transplants, LASER and Endo-Urological Surgeries and Laparoscopic Urosurgeries. Uro-oncology, Infertility and Andrology are other essential services provided under the same roof.
                Our team of doctors have been performing successful Renal transplant since 2007.`
            },
            {
                type:"paragraph",
                content:`We are equipped and very well experienced to conduct all endoscopic surgery including flexible ureteroendoscopy 
                and laser surgeries (for Prostate) and We offer the most comprehensive service for patients seeking treatment for:`
            },
            {
                type:'list',
                items:[
                    'Erectile dysfunction.',
                    'Bladder & pelvic pain.',
                    'Prostatitis.',
                    'Bladder cancer',
                    'Urological cancer',
                ]
            },
            {
                type:"paragraph",
                content:`We treat male and female urinary tract and the male reproductive organs.
                 Although urology is classified as a surgical specialty,
                 knowledge of internal medicine, pediatrics, gynecology, and other specialties is required by the urologist because of the wide variety of clinical problems encountered.`
            },
            {
                type:'heading',
                content:'When should you see an urologist?'
            },
            {
                type:'paragraph',
                content:`We treat male and female urinary tract and the male reproductive organs. 
                Although urology is classified as a surgical specialty, knowledge of internal medicine, pediatrics, gynecology, and other specialties is required by the urologist because of the wide variety of clinical problems encountered.`
            }
        ]
    },
    {
        title:"Neuro Surgery",
        navTo:'neuro-surgery',
        sections:[
            {
                type:'paragraph',
                content:`Neurosurgery, or neurological surgery, is the medical specialty concerned with the prevention, diagnosis, surgical treatment, and rehabilitation of disorders which affect any portion of the nervous system including the brain, spinal cord, central and peripheral nervous system, and cerebrovascular system. `
            },
            {
                type:'paragraph',
                content:`At Narayan Swaroop Hospital, department of Neurosurgery offers 24×7 assistance to tackle emergencies with world class ICU/CCU geared up to deal swiftly with emergencies of head & neck trauma patients, stroke including TPA and other neurological emergencies. A physiotherapy and rehabilitation unit offers exceptional neuro-rehabilitation to help the troubled patients overcome their disabilities.`
            },
            {
                type:'heading',
                content:`Neurosurgery Procedures:`
            },
            {
                type:'list',
                items:[
                    'Cerebrovascular – aneurysms and arteriovenous malformations (AVMs), and stroke.',
                    'Neuro-oncology (braintumors)',
                    'Spinal neurosurgery.',
                    'Functional and epilepsy neurosurgery.',
                    'Functional and epilepsy neurosurgery.',
                    'Trigeminal neuralgia and nerve compression syndromes.',
                    'Peripheral nerve injury.'
                ]
            }
        ]
    },
    {
        title:"Orthopaedics & Joint Replacement",
        navTo:'orthopedia-and-joint-replacement',
        sections:[
            {
                type:'paragraph',
                content:`Orthopaedic Services at Narayan Swaroop Hospitals takes care of all kinds of trauma and disorders of the musculo-skeletal system.
                 The 24 hour Emergency department receives and takes care of all major and minor trauma and other orthopaedic emergencies.`
            },
            {
                type:'paragraph',
                content:`Orthopaedic department is managed by highly accomplished consultant having experience in various fields of orthopedic surgery, treating all kinds of musculo-skeletal problems ranging from arthritis to sports injuries, complex fractures, bone tumors and childhood conditions like CTEV.`
            },
            {
                type:'paragraph',
                content:`The department specializes in latest techniques and treatments such as minimally invasive surgery, cartilage and bone transplantation, spine surgery and limb sparing surgery.`
            },
            {
                type:'heading',
                content:'Orthopaedic services include treatment for:'
            },
            {
                type:'list',
                items:[
                    'Orthopaedic disorders like Arthritis & Osteoporosis.',
                    'Fractures & Trauma.',
                    'HIP & KNEE Replacement.Treatment of Ligament Injuries and Sports Injuries.',
                    'Infections & Osteomyelitis.',
                    'Limb Reconstruction & Deformities Correction.',
                    'Arthroscopy & Arthroplasty.',
                    'Pediatric Orthopaedics.',
                    'Rehabilitation & Physiotherapy',
                    'Sports Medicine.'
                ]
            }
        ]

    },
    {
        title:'Onco Surgery',
        navTo:'onco-surgery',
        sections:[
            {
                type:'paragraph',
                content:`The Department of onco-surgery at Narayan Swaroop Hospital has a comprehensive cancer care unit that follows trans-disciplinary and multi-modality approach and provides supportive care through all stages of cancer whenever needed. Complex tumour removals are skillfully performed by our highly trained and motivated surgical oncologists.`
            },
            {
                type:'paragraph',
                content:`The oncologists collaborate with experts in all other departments to provide coordinated and integrated care to treat people with different kinds of cancers, including:`
            },
            {
                type:'list',
                items:[
                    'Brain Tumor',
                    'Head & Neck Cancer',
                    'Breast Cancer',
                    'Lung Cancer',
                    'Liver Cancer',
                    'Ovarian Cancer',
                    'Uterine Cancer',
                    'Prostate Cancer',
                    'Kidney Cancer',
                    'Pancreatic Cancer'
                ]
            }
        ]
    },
    {
        title:'Department of Pediatrics and Neonatology',
        navTo:'pediatric-surgery',
        sections:[
            {
                type:'paragraph',
                content:`Paediatric surgery is a subspeciality of surgery which involves the treatment and management of diseases occurring throughout infancy and childhood. Some of the conditions that paediatric surgeons at Narayan Swaroop Hospital usually treat are congenital anomalies, solid tumors, cancers, infectious conditions, trauma, and injuries. Narayan Swaroop Hospital offers the best paediatric surgery services with the help of their dedicated team of the top paediatric surgeons. They provide their surgical expertise to children requiring paediatric airway surgery, paediatric reconstructive urology, paediatric minimal access surgery, paediatric hepatobiliary, and pancreatic surgery.`
            },
            {
                type:'paragraph',
                content:`Narayan Swaroop Hospital provides both the medical and surgical health services for children. There is a separate ward for pediatric patients in case of indoor patients.A neonatal intensive care unit also known as intensive care unit nursery, it is an intensive care unit specializing in the care of ill or premature new born babies. Neonatal period refers to first 28 days of life.`
            },
            {
                type:'heading',
                content:`NICU care is given:`
            },
            {
                type:'list',
                items:[
                    'Pre-mature babies (Babies who are born very early)',
                    'Babies born with health problems like respiratory distress',
                    'Babies born with difficult delivery',
                    'Babies born to mother with meconium stained liquor',
                    'Service',
                    'Incubator',
                    'Phototherapy',
                    'C-PAP',
                    'Ventilator',
                    'Oxygen Hood',

                ]
            },
        ]
    },
    {
        title:'Plastic & Burn Reconstructive Surgery',
        navTo:'plastic-burn-reconstructive-surgery',
        sections:[
            {
                type:'paragraph',
                content:`If you have a severe wound, such as a burn that has limited your mobility, causes a loss of sensation, plastic surgery at Narayan Swaroop Hospital may be an option. We have the experienced and skilled surgeons to bring you back to your regular life. If your wound is severe, you may have to undergo debriding, which is the removal of dead tissue, prior to reconstructive sugery. Once that is done, there are several types of wound treatments that we may suggest:`
            },
            {
                type:'heading',
                content:'Skin grafts'
            },
            {
                type:'paragraph',
                content:`This is often used for burn patients, skin is removed from one area of the body and transplanted to another. There are two types of skin graft: split-thickness grafts in which just a few layers of outer skin are transplanted and full-thickness grafts, which involve all of the dermis. There is usually permanent scarring that is noticeable.`
            },
            {
                type:'paragraph',
                content:`During a skin graft, a special skin-cutting instrument known as a Dermatome removes the skin from an area (the donor site) usually hidden by clothing such as the buttocks or inner thigh. Once removed, the graft is placed on the area in need of covering and held in place by a dressing and a few stitches. The donor site is also covered with a dressing to prevent infection from occurring. Recovery time from a split-thickness skin graft is generally fairly rapid, often less than three weeks. For full-thickness skin graft patients the recovery time is a few weeks longer. Aside from burn patients, skin grafts can also be used during breast or nose reconstruction, and for extensive areas of trauma, extensive skin loss due to infection, and removal of large skin cancers.`
            },
            {
                type:'heading',
                content:'Microsurgery'
            },
            {
                type:'paragraph',
                content:`Have you lost a finger, toe, ear, or even a lip? Microsurgery may allow for those to be re-attached. Simply stated, it is a procedure in which the surgeon uses a microscope for surgical assistance in reconstructive procedures. By using a microscope, the surgeon can actually sew tiny blood vessels or nerves, allowing them to repair damaged nerves and arteries. This may also be a method to relieve facial paralysis or reconstruct breasts. Microsurgery is frequently used with other surgical procedures such as the free flap procedure.`
            },
            {
                type:'heading',
                content:'Free flap procedure'
            },
            {
                type:'paragraph',
                content:`A free flap procedure is often performed during breast reconstruction or following surgery to remove head or neck cancer. During the procedure, muscle, skin, or bone is transferred along with the original blood supply from one area of the body (donor site) to the surgical site in order to reconstruct the area. The procedure often involves the use of microsurgery. Healing of the surgical site can be slow and require frequent wound care. Total recovery may take six to eight weeks or longer.`
            },
            {
                type:'heading',
                content:"Tissue expansion"
            },
            {
                type:'paragraph',
                content:`Tissue expansion is a medical procedure that enables your body to “grow” extra skin for use in reconstructive procedures. This is accomplished by inserting an instrument known as a “balloon expander” under the skin near the area in need of repair. Over time, this balloon will be gradually filled with saline solution (salt water), slowly causing the skin to stretch and grow, much the same way a woman’s skin stretches during pregnancy`
            }

        ]
    },
    {
        title:'Gastro Intestinal Surgery',
        navTo:'gastro-intestinal-surgery',
        sections:[
            {
                type:'paragraph',
                content:`Gastrointestinal surgery is a treatment for diseases of the parts of the body involved in digestion. This includes the esophagus, stomach, small intestine, large intestine, rectum, liver, gallbladder, and pancreas. Narayan Swaroop Hospital has the best team of surgeons and consultants who work closely that assures your recovery after surgery.`
            },
            {
                type:'paragraph',
                content:`Surgery may be used to remove a cancerous or noncancerous growth or damaged part of the body, such as the intestine. It may also be used to repair a problem like a hernia (a hole or weak spot in the wall of the abdomen). Minor surgical procedures are used to screen and diagnose problems of the digestive system.`
            },
            {
                type:'heading',
                content:'Benefits'
            },
            {
                type:'paragraph',
                content:`Surgery to remove a tumor or diseased body part, or repair damage, can be lifesaving. Surgery can also improve the quality of life for someone who has not benefited from other treatments, like medicine or diet changes. Colonoscopy is a minor surgical procedure with big benefits: it can catch colon cancer early enough to cure it. It’s important to get the recommended colon cancer screening`
            },
            {
                type:'heading',
                content:'How is it done or administered ?'
            },
            {
              type:'paragraph',
              content:`Most surgery is done by cutting into the body with a scalpel (a small knife) and other tools. Some surgery is done with a scope — a thin tube with a camera and small surgery tools — to remove growths in the colon, for example.`  
            },
            {
                type:'paragraph',
                content:'Surgery done by cutting into the body can be either open surgery or minimally invasive surgery.'
            }
        ]
    },
    {
        title:'Breast Surgery',
        navTo:'breast-surgery',
        sections:[
            {
                type:'paragraph',
                content:`Breast surgery at Narayan Swaroop Hospital typically can be divided into three general categories: augmentation, reduction and reconstruction.`
            },
            {
                type:'heading',
                content:'Breast augmentation'
            },
            {
                type:'paragraph',
                content:`Breast augmentation is performed to enhance the appearance, size and contour of a woman’s breasts. Women consider breast augmentation — or augmentation mammoplasty — for different reasons. Some women feel their breasts are too small in relation to their body contour. Some women desire augmentation after size loss associated with pregnancy and lactation. Others desire to correct an asymmetry in breast size.`
            },
            {
                type:'heading',
                content:'Breast reduction'

            },
            {
                type:'paragraph',
                content:`Large, heavy, pendulous breasts can be uncomfortable. The excess weight can cause neck pain, back pain, skin irritation, bra strap indentations, numbness or weakness. Breast reduction is known as reduction mammoplasty. The procedure involves removal of excess skin, fat and glandular tissue.`
            },
             {
                type:'heading',
                content:'Breast reconstruction'

            },
            {
                type:'paragraph',
                content:`Breast reconstruction seeks to recreate a breast with the desired appearance, contour and volume. The nipple-areola component also is recreated. Normal breast sensation and the ability to breastfeed are lost when the sensory nerves or milk glands and ducts have been removed or significantly injured.`
            },
             {
                type:'heading',
                content:'Breast lifts'

            },
            {
                type:'paragraph',
                content:`In some women, the skin is not strong or resilient enough to support the weight of the breast, causing the breasts to sag. With this condition, called ptosis, there is too much skin compared to breast tissue. To give the breast a lift, or what is known as mastopexy, the excess skin must be removed.`
            }     

        ]
    },
    {
        title:'Thyroid Surgery',
        navTo:'thyroid-surgery',
        sections:[
            {
                type:'paragraph',
                content:`At Narayan Swaroop Hospital Thyroid surgery is performed for several reasons and can include symptomatic thyroid nodules, recurrent thyroid cysts, goiter, Graves’ disease, and to rule out or treat thyroid cancer. The purpose of thyroid surgery is to remove part or all of the thyroid gland. You will be in the hospital usually one night.`
            },
            {
                type:"heading",
                content:"Risk"
            },
            {
                type:'paragraph',
                content:`As with any surgical procedure, there are risks involved. There is a risk of bleeding, but this is very low. The average blood loss is less than an ounce. The risk of infection is so low that antibiotics are not routinely used. There is also a very low risk of injury to important nerves in the neck, called recurrent laryngeal nerves. These nerves control the vocal cords. Injury to these nerves could affect your voice.`
            },
            {
                type:"heading",
                content:"What will happen in surgery?"
            },
            {
                type:'paragraph',
                content:`You will be given general anesthesia to put you to sleep. You are positioned with special pillows under your neck to tilt your head back. An incision is made at the base of your neck and is about three to four inches long. Using magnifying lenses, the surgeon locates the thyroid gland and associated structures and all or part of the thyroid is removed. In some cases additional surgery will involve removal of lymph nodes and other structures. The incision is stitched closed and is then covered with steri-strip tapes and a dry gauze dressing. The operation generally lasts from two to three hours. After surgery, you will stay in the recovery room for several hours. You will be monitored closely as you recover from the anesthesia.`
            },
            {
                type:"heading",
                content:"The Incision"
            },
            {
                type:'paragraph',
                content:`After the dressing is removed, you will notice that the incision is covered with tapes (steri-strips). These will stay on for about a week. Leave the steri-strips in place. You may shower the day after surgery. Try to keep the neck area as dry as possible and pat dry after showering. The stitches will be removed in about a week and a half after surgery. Infection is extremely rare. If you notice any redness or drainage from the incision contact your surgeon.`
            },
            {
                type:"heading",
                content:"How will you feel after surgery?"
            },
            {
                type:'paragraph',
                content:`Everyone is different. You will most likely be tired and a bit sore for a few days. You may have pain not only from your incision, but also from muscle soreness in your upper back and shoulders. This is from the positioning in the operating room during the surgery. You will have liquid pain medicine in the hospital and a prescription for pain pills at home.`
            }
            
        ]
    },
    {
        title:'ENT',
        navTo:'ent',
        sections:[
            {
                type:'paragraph',
                content:`The ENT Department at Narayan Swaroop Hospital provides diagnosis and treatment of disorders of the head and neck in particular the ear, nose and throat. ENT doctors are also called otolaryngologists.`
            },
            {
                type:"heading",
                content:"Facilities at Narayan Swaroop Hospital:"
            },
            {
                type:'list',
                items:[
                    'Nasal Septoplasty, Septorhinoplasty & Functional Endoscopy sinus Surgery.',
                    'Non-invasive out-patient examination.',
                    'Otology Surgeries for discharging ear & facial palsy.',
                    'Otoscope/auriscope for diagnosis of disorders of ear.',
                    'Head & neck surgeries.',
                    'Hearing assessment.',
                    'Allergy test.'
                ]
            },
            {
                type:"heading",
                content:'Pre-operative Check-up (PAC):'
            },
            {
                type:'paragraph',
                content:`Heart diseases that a cardiologist can help with include:`
            },
            {
                type:'paragraph',
                content:`Consultants of Internal Medicine are involved in preoperative checks in addition to anaesthetists to pick up & manage existing medical problem prior to surgical procedures as well as to take appropriate measures prior to surgeries. In some cases, consultants are required to manage co-morbid medical problems with surgical conditions. Super-specialists are also called preoperatively, intra operatively, post operatively or whenever required.`
            },
        ]
    },
    {
        title:"Genitourinary",
        navTo:'genitourinary',
        sections:[
            {
                type:'paragraph',
                content:`At Narayan Swaroop Hospital, genitourinary department provides treatment for all the genitourinary problems like Urethral stricture, Hypospadias, Kidneys stones, Ureteric stones, Bladder stones etc. Most of the genitourinary problems are dealt laparoscopically.`
            },
            {
                type:'paragraph',
                content:`Genitourinary Surgeries Provided by Laparoscopy :`
            },
            {
                type:'list',
                items:[
                    'PCNL (Percutaneous Nephrolithotomy) for Kidney stones.',
                    'Laparoscopic ureterolithotomy for Upper & Middle Ureteric stones.',
                    'URSL for Lower Ureteric Stone.',
                    'Cystolitholapaxy for Urinary Bladder stones.',
                    'TURP (Trans Urethral Resection of Prostate) for BPH.'
                ]
            },
        ]
    },
    {
        title:"Colorectal Surgery",
        navTo:'colorectal-surgery',
        sections:[
            {
                type:'paragraph',
                content:`Our colon and rectal surgeons at Narayan Swaroop Hospital with the experience of 20 years offer the latest medical and surgical treatment of diseases of the colon, rectum and anus. Treatment includes benign and malignant conditions.`
            },
            {
                type:"heading",
                content:'Colectomy'
            },
            {
                type:'paragraph',
                content:`A colectomy, or, colon resection, removes all or part of the large intestine.`
            },
            {
                type:"heading",
                content:'General Surgeries provided'
            },
            {
                type:"list",
                items:[
                    'Segmental Colectomies',
                    'Polypectomy',
                    'Colectomy'
                ]
            },
             {
                type:'paragraph',
                content:`A colostomy is a surgical procedure during which your surgeon creates a hole in your abdominal wall and pulls one end of the colon through the opening. Surgeons perform colostomy procedures to treat a number of colon and rectal conditions. This procedure fundamentally alters how your body excretes waste and fecal matter. The area where the new opening sits is called a stoma. This is where waste matter will exit your body. The colostomy is either temporary or permanent.`
            },

        ]
    },
    {
        title:"Trauma & Accident Surgery",
        navTo:'trauma-and-accident-surgery',
        sections:[
            {
                type:'paragraph',
                content:`Trauma surgery is a specialised field of surgery that deals with the immediate and urgent care of patients who have suffered severe injuries or trauma. Trauma surgeons are responsible for assessing, diagnosing, and treating patients with acute injuries, often in emergencies.`
            }
        ]
    },
    {
        title:"Evlt-endovenous Laser Treatment",
        navTo:'evlt-endovenous-laser-treatment',
        sections:[
            {
                type:"paragraph",
                content:`EVLT treatment of varicose vein uses lasers that generate high-energy. The produced heat is absorbed by haemoglobin and the surrounding tissue, which then results in the formation of steam bubbles. The bubbles cause blood to boil and induce thermal injuries to the venous endothelium and intima.`
            }
        ]
    },
    {
        title:"Laser Surgery",
        navTo:'laser-surgery',
        sections:[
            {
                type:"paragraph",
                content:`Laser surgery is a type of surgery that uses special light beams instead of instruments, such as scapels, to perform surgical procedures. There are several different types of lasers, each with characteristics that perform specific functions during surgery.`
            }
        ]
    },
    {
        title:"Piles",
        navTo:'piles',
        sections:[
            {
                type:"paragraph",
                content:`Piles are inflamed and swollen collections of tissue in the anal area. They can have a range of sizes, and they may be internal or external.`
            },
             {
                type:"paragraph",
                content:`Internal piles are normally located between 2 and 4 centimeters (cm) above the opening of the anus, and they are the more common type. External piles occur on the outside edge of the anus.`
            }
        ]
    },
    // {
    //     title:"Medicine Department",
    //     navTo:'medicine-department',
    //     sections:[
    //         {
    //             type:"paragraph",
    //             content:`General Medicine is the branch of medicine that deals with the diagnosis and nonsurgical treatment of diseases of the internal organs. You will find the causes, symptoms, diagnosis and treatment of a huge range of disorders affecting every part of the body.`
    //         },
    //          {
    //             type:"paragraph",
    //             content:`The aim of General Medicine at Narayan Swaroop Hospital is to provide rapid and reliable source of information on current developments in the field of Clinical Trials.`
    //         },
    //          {
    //             type:"paragraph",
    //             content:`General medicine patients are often seriously ill or require complex investigations, internists do much of their work in hospitals. Internists often have subspecialty interests in diseases affecting particular organs or organ systems.`
    //         }
    //     ]
    // },
    {
        title:"General Medicine",
        navTo:'general-medicine',
        sections:[
            {
                type:"paragraph",
                content:`General Medicine is the branch of medicine that deals with the diagnosis and nonsurgical treatment of diseases of the internal organs. You will find the causes, symptoms, diagnosis and treatment of a huge range of disorders affecting every part of the body.`
            },
             {
                type:"paragraph",
                content:`The aim of General Medicine at Narayan Swaroop Hospital is to provide rapid and reliable source of information on current developments in the field of Clinical Trials.`
            },
             {
                type:"paragraph",
                content:`General medicine patients are often seriously ill or require complex investigations, internists do much of their work in hospitals. Internists often have subspecialty interests in diseases affecting particular organs or organ systems.`
            }
        ]
    },
    {
        title:"TB and Chest Respiratory Medicine",
        navTo:'tb-and-chest-respiratory-medicine',
        sections:[
            {
                type:"paragraph",
                content:`Department of TB & Chest at Narayan Swaroop Hospital deals with diseases of the respiratory tract like diseases of the airway (Bronchial Asthma, COPD), interstitial diseases, diseases of alveolar space (ARDS), diseases of ventilatory control, occupational lung diseases, all types of infection related to lungs, diseases of mediastinum and pleura, cancer of lungs & pleura, sleep related disorders (SAS, Narcolepsy, restless leg syndrome, periodic limb movement) and upper airway resistance syndrome.`
            },
            {
                type:"paragraph",
                content:`Facilities at Narayan Swaroop Hospital include:`
            },
            {
                type:"list",
                items:[
                    'Management of Acute & Chronic Lung Disease.',
                    'Pleural Fluid Aspiration.',
                    'Intercostal Drainage (ICD) for pleural effusion & Empyema thorax.',
                    'Management of Traumatic Hemothorax.',
                    'Management of Pneumothorax.'
                ]
            }
        ]
    },
];

export default dummyData;