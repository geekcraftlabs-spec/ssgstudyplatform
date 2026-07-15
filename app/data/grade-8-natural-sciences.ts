// app/data/grade-8-natural-sciences.ts

export const grade8NaturalSciences = {
  subject: "Natural Sciences",
  grade: 8,
  terms: {
    term1: {
      id: "term1",
      label: "Term 1",
      weeks: [
        {
          id: "t1-w1-2",
          label: "Week 1-2",
          topic: "Photosynthesis and Respiration",
          notes: `
## Photosynthesis

Photosynthesis is the process green plants use to make their own food.

Plants take in:
- Carbon dioxide (CO₂) – from the air
- Water (H₂O) – from the soil
- Sunlight energy – from the Sun

They use these to produce:
- Glucose (C₆H₁₂O₆) – this is the food
- Oxygen (O₂) – released as a by-product

### The word equation:
\`\`\`
Carbon dioxide + Water --sunlight--> Glucose + Oxygen
\`\`\`

### Where does photosynthesis happen?
- Inside chloroplasts (tiny structures in leaf cells)
- Chlorophyll is the green pigment inside chloroplasts
- Chlorophyll traps sunlight energy
- That's why plants are green

### What happens to the glucose?
Plants don't use all the glucose immediately. They:
1. Use some for energy – through respiration
2. Convert some to starch – starch is insoluble, easier to store
3. Convert some to cellulose – strengthens plant cell walls

### Why starch?
- Glucose dissolves in water (soluble)
- Starch does not dissolve (insoluble)
- Starch is easier for plants to store in large amounts

### How do we test for starch?
Use the iodine test:
- Iodine solution is orange-brown
- Add it to a leaf
- If it turns dark blue-black → starch is present → photosynthesis occurred
- If it stays orange-brown → no starch → no photosynthesis

---

## Respiration

Respiration is the process where energy is released from food (glucose).

### Important:
- Happens in ALL living organisms (plants AND animals)
- Happens ALL the time (day and night)

### The word equation:
\`\`\`
Glucose + Oxygen → Energy + Carbon dioxide + Water
\`\`\`

### Why is respiration important?
- All life processes need energy
- Energy is stored in food as chemical potential energy
- Respiration releases this energy
- The energy is used for: Movement, Growth, Reproduction, All other life processes

### Products of respiration:
1. Energy (the main product)
2. Carbon dioxide (CO₂) – a by-product
3. Water (H₂O) – a by-product

### How do we test for carbon dioxide?
Use the limewater test:
- Limewater is a clear liquid
- Bubble gas through it
- If it turns cloudy/milky → carbon dioxide is present

Example: When you breathe out, your breath contains CO₂ from respiration. Blow it through limewater and it turns cloudy.

---

## Photosynthesis vs Respiration – The Big Differences:

| Feature | Photosynthesis | Respiration |
|---------|---------------|-------------|
| Where | Only green plants | ALL organisms |
| When | Daytime (needs sunlight) | All the time |
| What goes in | CO₂ + water + sunlight | Glucose + oxygen |
| What comes out | Glucose + oxygen | Energy + CO₂ + water |

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Photosynthesis | Process where plants make food using CO₂, water and sunlight |
| Respiration | Process where energy is released from glucose |
| Chlorophyll | Green pigment that traps sunlight |
| Chloroplast | Structure in plant cells where photosynthesis happens |
| Starch | Insoluble form of glucose that plants store |
| By-product | A secondary product of a process (e.g., oxygen in photosynthesis) |

### Worked Examples

**Example 1: Testing for starch**
A learner places a leaf in boiling water for 2 minutes, then in warm alcohol to remove chlorophyll, then adds iodine. The leaf turns dark blue-black. What does this mean?

**Solution:** The leaf contains starch. Since starch is produced during photosynthesis, this leaf must have photosynthesised.

**Example 2: Testing for CO₂**
A student breathes through a straw into a test tube of clear limewater. After 2 minutes, the limewater is cloudy. Explain why.

**Solution:** The student's breath contains carbon dioxide from respiration. Carbon dioxide reacts with limewater to form a cloudy white precipitate (calcium carbonate).

**Example 3: Respiration vs Photosynthesis**
A plant is kept in a dark cupboard for 48 hours. When tested for starch, the leaves show no starch. Explain why.

**Solution:** Plants need sunlight for photosynthesis. Without sunlight, the plant cannot produce glucose, so no starch is stored. However, the plant still respires, using stored glucose for energy.
`,
          questions: [
            { id: 1, question: "What is the main source of energy for life on Earth?", options: ["The Moon", "The Sun", "The Earth's core", "Wind"], correct: 1 },
            { id: 2, question: "What is the name of the green pigment that traps sunlight in plants?", options: ["Chloroplast", "Chlorophyll", "Glucose", "Starch"], correct: 1 },
            { id: 3, question: "Which of these is a requirement for photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Glucose", "Starch"], correct: 1 },
            { id: 4, question: "What is the main product of photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Glucose", "Water"], correct: 2 },
            { id: 5, question: "What gas is released as a by-product of photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 1 },
            { id: 6, question: "Why do plants convert glucose into starch?", options: ["Starch tastes sweeter", "Starch is soluble", "Starch is insoluble and easier to store", "Starch is used for growth"], correct: 2 },
            { id: 7, question: "In which part of the plant cell does photosynthesis occur?", options: ["Nucleus", "Cell wall", "Chloroplast", "Vacuole"], correct: 2 },
            { id: 8, question: "What happens to the iodine solution when starch is present?", options: ["It turns green", "It stays orange-brown", "It turns dark blue-black", "It turns colourless"], correct: 2 },
            { id: 9, question: "What is the correct equation for photosynthesis?", options: ["Glucose + Oxygen → CO₂ + Water", "CO₂ + Water + Sunlight → Glucose + Oxygen", "Glucose + CO₂ → Water + Oxygen", "Water + Oxygen → Glucose + CO₂"], correct: 1 },
            { id: 10, question: "In which organisms does respiration take place?", options: ["Only animals", "Only plants", "Only humans", "All living organisms"], correct: 3 },
            { id: 11, question: "What are the products of respiration?", options: ["Glucose and Oxygen", "Energy, CO₂ and Water", "Starch and Sunlight", "Chlorophyll and Oxygen"], correct: 1 },
            { id: 12, question: "When do plants respire?", options: ["Only during the day", "Only at night", "Both day and night", "Only in summer"], correct: 2 },
            { id: 13, question: "What does limewater test detect?", options: ["Glucose", "Starch", "Carbon dioxide", "Oxygen"], correct: 2 },
            { id: 14, question: "What happens to limewater when CO₂ is bubbled through it?", options: ["It turns green", "It stays clear", "It turns cloudy/milky", "It turns blue-black"], correct: 2 },
            { id: 15, question: "Which of the following is a requirement for respiration?", options: ["Sunlight", "Chlorophyll", "Glucose", "Carbon dioxide"], correct: 2 },
            { id: 16, question: "Humans get energy from food through which process?", options: ["Photosynthesis", "Respiration", "Evaporation", "Condensation"], correct: 1 },
            { id: 17, question: "Why is oxygen important for living organisms?", options: ["It is needed for photosynthesis", "It is needed for respiration", "It provides food", "It gives plants their green colour"], correct: 1 },
            { id: 18, question: "Plants are called producers because they:", options: ["Eat other organisms", "Produce their own food", "Produce oxygen", "Reproduce quickly"], correct: 1 },
            { id: 19, question: "Which two gases are cycled between plants and animals?", options: ["Hydrogen and Helium", "CO₂ and Oxygen", "Nitrogen and Oxygen", "Water vapour and CO₂"], correct: 1 },
            { id: 20, question: "Respiration is defined as:", options: ["The process of making food using sunlight", "The process by which energy is released from food", "The process of breathing in and out", "The process of storing glucose as starch"], correct: 1 }
          ]
        },
        {
          id: "t1-w3-7",
          label: "Week 3-7",
          topic: "Interactions and Interdependence",
          notes: `
## What is Ecology?

Ecology is the study of how organisms interact with each other and with their environment.

### Levels of Ecological Organisation:

1. **Population** – same species, same area, same time
   - Example: all the zebra in Kruger National Park

2. **Community** – all the populations in an area
   - Example: all the zebra, lions, trees, grass in Kruger

3. **Ecosystem** – community + non-living factors
   - Example: Kruger National Park (living things + water, soil, temperature)

4. **Biosphere** – all ecosystems on Earth combined

### Biotic vs Abiotic:
- **Biotic** = living (plants, animals, fungi, bacteria)
- **Abiotic** = non-living (water, soil, temperature, sunlight, wind)

---

## Types of Interactions

### 1. Competition
Organisms compete for limited resources (food, water, space, mates).

### 2. Symbiosis
Long-term interaction between two different species

| Type | What happens | Example |
|------|-------------|---------|
| Parasitism | One benefits, one is harmed | Tick on a dog |
| Mutualism | Both benefit | Bee pollinating a flower |
| Commensalism | One benefits, other unaffected | Remora fish on a shark |

### 3. Predator-Prey
- Predator hunts and eats
- Prey is hunted and eaten
- Example: Lion (predator) and zebra (prey)

---

## Feeding Relationships

### Producers (Autotrophs):
- Make their own food
- Plants do this through photosynthesis
- They are the starting point of all food chains

### Consumers (Heterotrophs):

| Type | What they eat | Example |
|------|--------------|---------|
| Herbivore | Plants only | Cow, zebra, elephant |
| Carnivore | Meat only | Lion, leopard |
| Omnivore | Plants and meat | Human, pig |
| Scavenger | Dead animals | Hyena, vulture |
| Insectivore | Insects | Chameleon |

### Decomposers:
- Break down dead plant and animal matter
- Return nutrients to the soil
- Examples: Bacteria, fungi, earthworms
- Very important for recycling nutrients

---

## Food Chains and Food Webs

### Food Chains:
Shows one path of energy transfer. Arrows point towards the eater. Arrows show the direction of energy flow.

Example:
\`\`\`
Grass → Grasshopper → Mouse → Owl
(Producer) (Primary consumer) (Secondary) (Tertiary)
\`\`\`

Trophic levels = feeding levels in a food chain

### Energy Pyramids:
- Only 10% of energy passes to the next trophic level
- 90% is used by the organism for: Movement, Heat, Growth, Reproduction

**Why are there fewer top carnivores?**
- Producers need to be plentiful
- Only 10% energy passes up each level
- Therefore, there must be many producers to support a few consumers at the top

### Food Webs:
- Many interconnected food chains
- Shows all feeding relationships in an ecosystem
- More realistic than a single food chain

---

## Balance in an Ecosystem

### What maintains balance?
- Resources (food, water, shelter) limit population size
- An ecosystem can only support a certain number of organisms

### Disruptions to Balance:

| Natural factors | Human factors |
|-----------------|---------------|
| Floods | Poaching |
| Droughts | Pollution |
| Fires | Habitat destruction |
| Climate change | Introducing alien plants |

---

## Adaptations:

Adaptations are changes in a species over many generations that allow organisms to survive in their environment.

### Three types:

| Type | Description | Example |
|------|-------------|---------|
| Structural | Body parts | Long legs, sharp claws |
| Functional | Body processes | Storing water, not sweating |
| Behavioural | Actions | Migration, hunting at night |

**Important:** Individuals DO NOT adapt. Populations/species adapt over time.

### Conservation:
Protecting ecosystems through:
- Reduce, reuse, recycle
- Controlling alien plants
- Protecting wetlands
- Protecting endangered species

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Ecology | Study of interactions between organisms and their environment |
| Population | Same species, same area, same time |
| Community | All populations in an area |
| Ecosystem | Community + non-living factors |
| Biotic | Living factors in an ecosystem |
| Abiotic | Non-living factors in an ecosystem |
| Producer | Organism that makes its own food |
| Consumer | Organism that eats other organisms |
| Herbivore | Eats only plants |
| Carnivore | Eats only meat |
| Omnivore | Eats both plants and animals |
| Decomposer | Breaks down dead matter, recycles nutrients |
| Adaptation | Change in a species over generations to survive |
| Food chain | One path of energy transfer |
| Food web | Many interconnected food chains |

### Worked Examples

**Example 1: Identifying trophic levels**
In the food chain: Grass → Rabbit → Fox → Lion
Identify the producer, primary consumer, secondary consumer, and tertiary consumer.

**Solution:**
- Producer: Grass
- Primary consumer: Rabbit (eats grass)
- Secondary consumer: Fox (eats rabbit)
- Tertiary consumer: Lion (eats fox)

**Example 2: Energy pyramid calculation**
If there are 10,000 units of energy in the producers, how much energy reaches the secondary consumers?

**Solution:**
- Producers (10,000 units)
- Primary consumers: 10% of 10,000 = 1,000 units
- Secondary consumers: 10% of 1,000 = 100 units
- Answer: 100 units

**Example 3: Identifying adaptations**
The ostrich cannot fly, but it can run up to 70 km/h. It has strong legs and clawed toes for fighting predators. Classify these adaptations.

**Solution:**
- Running up to 70 km/h: Behavioural adaptation (it runs away)
- Strong legs and clawed toes: Structural adaptation (body parts for fighting)
`,
          questions: [
            { id: 1, question: "Define a population in ecology.", options: ["All the different species in an area", "A group of organisms of the same species in the same area", "All the living and non-living things in an area", "All ecosystems on Earth"], correct: 1 },
            { id: 2, question: "Which of the following is an abiotic factor?", options: ["Trees", "Animals", "Temperature", "Bacteria"], correct: 2 },
            { id: 3, question: "What is the difference between a herbivore and a carnivore?", options: ["Herbivores eat meat, carnivores eat plants", "Herbivores eat plants, carnivores eat meat", "Herbivores eat both, carnivores eat only plants", "Herbivores are producers, carnivores are consumers"], correct: 1 },
            { id: 4, question: "Which of the following is an example of mutualism?", options: ["A tick feeding on a dog", "A bee pollinating a flower", "A hyena eating a dead zebra", "A remora fish on a shark"], correct: 1 },
            { id: 5, question: "In a food chain, what do the arrows represent?", options: ["The flow of matter", "The direction of energy transfer", "The number of organisms", "The size of organisms"], correct: 1 },
            { id: 6, question: "Why are there more producers than top carnivores in an ecosystem?", options: ["Producers are smaller", "Only 10% of energy passes to the next trophic level", "Producers live longer", "Carnivores eat more"], correct: 1 },
            { id: 7, question: "What is a food web?", options: ["A single feeding relationship", "Many interconnected food chains", "A list of all organisms in an ecosystem", "A diagram showing abiotic factors"], correct: 1 },
            { id: 8, question: "Which of the following is an example of a structural adaptation?", options: ["A bird migrating south for winter", "A bear hibernating", "A cheetah having long legs for running", "A plant closing its stomata to save water"], correct: 2 },
            { id: 9, question: "Which of the following is a human factor that disrupts ecosystems?", options: ["Drought", "Flood", "Poaching", "Fire"], correct: 2 },
            { id: 10, question: "What is the role of decomposers in an ecosystem?", options: ["To produce food", "To hunt other animals", "To break down dead matter and recycle nutrients", "To compete for resources"], correct: 2 },
            { id: 11, question: "A population of lions hunts a population of zebras. This is an example of:", options: ["Competition", "Mutualism", "Predator-prey relationship", "Parasitism"], correct: 2 },
            { id: 12, question: "Which level of ecological organisation includes both living and non-living factors?", options: ["Population", "Community", "Ecosystem", "Biosphere"], correct: 2 },
            { id: 13, question: "An organism that eats both plants and animals is called:", options: ["Herbivore", "Carnivore", "Omnivore", "Producer"], correct: 2 },
            { id: 14, question: "What percentage of energy passes from one trophic level to the next?", options: ["100%", "50%", "10%", "1%"], correct: 2 },
            { id: 15, question: "Which of the following is an example of parasitism?", options: ["A bee pollinating a flower", "A tick feeding on a dog", "A lion eating a zebra", "A remora fish on a shark"], correct: 1 },
            { id: 16, question: "What is the difference between a community and an ecosystem?", options: ["A community includes non-living factors", "An ecosystem includes non-living factors", "They are the same thing", "A community is larger"], correct: 1 },
            { id: 17, question: "Which of the following is NOT a way humans disrupt ecosystems?", options: ["Pollution", "Poaching", "Natural drought", "Habitat destruction"], correct: 2 },
            { id: 18, question: "A behavioural adaptation is:", options: ["A change in body structure", "A change in how an organism acts", "A change in internal body processes", "A change in colour"], correct: 1 },
            { id: 19, question: "In a food chain, the first organism is always:", options: ["A carnivore", "A herbivore", "A producer", "A decomposer"], correct: 2 },
            { id: 20, question: "Why do we need to conserve ecosystems?", options: ["To protect biodiversity and maintain balance", "To make money", "To have more animals to hunt", "To clear land for farming"], correct: 0 }
          ]
        },
        {
          id: "t1-w8-9",
          label: "Week 8-9",
          topic: "Microorganisms",
          notes: `
## What are Microorganisms?

Living things too small to see with the naked eye. Need a microscope to see them.

### Four Main Groups:

| Group | Description |
|-------|-------------|
| Viruses | Not truly living (no cells) |
| Bacteria | Single-celled, no nucleus |
| Protists | Single-celled, have a nucleus |
| Fungi | Moulds, yeasts, mushrooms |

---

## Harmful Microorganisms (Pathogens)

**What are pathogens?** Microorganisms that cause disease. Spread in many ways.

### How diseases spread:

| Method | Example |
|--------|---------|
| Droplets (coughs/sneezes) | Flu, colds |
| Contaminated water | Cholera, typhoid |
| Contaminated food | Food poisoning |
| Cuts/wounds | Tetanus |
| Animal bites | Malaria (mosquito), rabies |

### Some diseases to know:

| Disease | Caused by | Spread by |
|---------|-----------|-----------|
| HIV/AIDS | Virus | Bodily fluids |
| Malaria | Protist | Mosquito bite |
| Cholera | Bacteria | Contaminated water |
| TB | Bacteria | Droplets (coughing) |
| Typhoid | Bacteria | Contaminated water/food |

### How to prevent the spread:
1. Wash hands with soap and warm water
2. Sterilise equipment (needles, utensils)
3. Use condoms (HIV prevention)
4. Mosquito nets (malaria prevention)
5. Vaccinations

---

## Useful Microorganisms

### In ecosystems:
- Decomposers break down dead matter
- Return nutrients to the soil
- Nitrogen-fixing bacteria convert nitrogen for plants

### In food production:
- Yeast makes bread rise (produces CO₂)
- Yeast makes beer and wine (fermentation)
- Bacteria make yoghurt and cheese

### In medicine:
- Penicillin – from fungi, kills bacteria
- Used in research for new medicines

### In biotechnology:
- Produce biogas and biofuels

---

## Fermentation

Yeast uses sugar for energy. Produces carbon dioxide and alcohol.

### Word equation:
\`\`\`
Sugar --yeast--> Carbon dioxide + Alcohol
\`\`\`

### Uses:
- Making bread (CO₂ makes it rise)
- Making beer and wine

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Microorganism | Living thing too small to see without a microscope |
| Pathogen | A microorganism that causes disease |
| Virus | Non-living infectious agent |
| Bacteria | Single-celled organism (no nucleus) |
| Protist | Single-celled organism (has a nucleus) |
| Fungi | Moulds, yeasts, mushrooms |
| Decomposer | Breaks down dead matter |
| Fermentation | Yeast breaks down sugar into CO₂ and alcohol |
| Sterilise | To make completely free of microorganisms |

### Worked Examples

**Example 1: Identifying microorganisms**
A student looks at pond water under a microscope and sees a single-celled organism with a nucleus swimming around. What group does this belong to?

**Solution:** This is a protist. Protists are single-celled organisms that have a nucleus. They are often found in water.

**Example 2: Disease transmission**
A community has an outbreak of cholera. Residents report that their tap water has been contaminated. How did the disease likely spread, and how can it be prevented?

**Solution:** Cholera is a waterborne disease caused by bacteria. It spreads through contaminated water. Prevention: boil drinking water, improve sanitation, wash hands frequently.

**Example 3: Fermentation**
Bread dough rises when left in a warm place. Explain why.

**Solution:** Yeast in the dough ferments sugar, producing carbon dioxide gas. The CO₂ forms bubbles in the dough, causing it to rise.
`,
          questions: [
            { id: 1, question: "What are microorganisms?", options: ["Large organisms visible to the naked eye", "Living things too small to see without a microscope", "Non-living things", "Only bacteria"], correct: 1 },
            { id: 2, question: "Which group of microorganisms does NOT have cells?", options: ["Bacteria", "Protists", "Viruses", "Fungi"], correct: 2 },
            { id: 3, question: "What is a pathogen?", options: ["A useful microorganism", "A microorganism that causes disease", "A type of virus", "A single-celled organism"], correct: 1 },
            { id: 4, question: "How does malaria spread to humans?", options: ["Through contaminated water", "Through coughing", "Through a mosquito bite", "Through contaminated food"], correct: 2 },
            { id: 5, question: "Which disease is caused by a virus?", options: ["Cholera", "TB", "HIV/AIDS", "Typhoid"], correct: 2 },
            { id: 6, question: "Which disease is spread through contaminated water?", options: ["Malaria", "HIV/AIDS", "Cholera", "Tetanus"], correct: 2 },
            { id: 7, question: "How can the spread of HIV be prevented?", options: ["Washing hands", "Using condoms", "Boiling water", "Vaccination"], correct: 1 },
            { id: 8, question: "Which microorganism is used to make bread rise?", options: ["Bacteria", "Yeast", "Virus", "Protist"], correct: 1 },
            { id: 9, question: "What is the role of decomposers in an ecosystem?", options: ["To cause disease", "To produce food", "To break down dead matter and recycle nutrients", "To eat other organisms"], correct: 2 },
            { id: 10, question: "What is fermentation?", options: ["The process where yeast breaks down sugar into CO₂ and alcohol", "The process where bacteria cause disease", "The process where viruses reproduce", "The process where plants make food"], correct: 0 },
            { id: 11, question: "What does penicillin come from?", options: ["Bacteria", "Viruses", "Fungi", "Protists"], correct: 2 },
            { id: 12, question: "Bacteria that live in the roots of legumes and fix nitrogen are an example of:", options: ["Parasitism", "Mutualism", "Commensalism", "Predation"], correct: 1 },
            { id: 13, question: "Which of the following is NOT a way diseases spread?", options: ["Droplets from coughing", "Contaminated water", "Eating healthy food", "Cuts and wounds"], correct: 2 },
            { id: 14, question: "A student sees a single-celled organism with no nucleus under a microscope. This is most likely:", options: ["A virus", "A bacterium", "A protist", "A fungus"], correct: 1 },
            { id: 15, question: "Why are decomposers important in ecosystems?", options: ["They produce oxygen", "They recycle nutrients back into the soil", "They provide food for humans", "They cause diseases"], correct: 1 },
            { id: 16, question: "What does sterilising equipment prevent?", options: ["The spread of useful microorganisms", "The spread of pathogens", "The growth of plants", "Fermentation"], correct: 1 },
            { id: 17, question: "Which microorganism is used to make yoghurt?", options: ["Viruses", "Yeast", "Bacteria", "Protists"], correct: 2 },
            { id: 18, question: "Louis Pasteur is famous for:", options: ["Discovering penicillin", "Developing vaccines for rabies and anthrax", "Inventing the microscope", "Discovering bacteria"], correct: 1 },
            { id: 19, question: "What is the word equation for fermentation?", options: ["Glucose + Oxygen → CO₂ + Water", "Sugar → CO₂ + Alcohol", "CO₂ + Water → Glucose + Oxygen", "Sugar + Oxygen → Alcohol + Water"], correct: 1 },
            { id: 20, question: "Which of the following is a useful microorganism?", options: ["HIV virus", "Cholera bacteria", "Yeast", "Malaria protist"], correct: 2 }
          ]
        }
      ]
    },
    term2: {
      id: "term2",
      label: "Term 2",
      weeks: [
        {
          id: "t2-w1",
          label: "Week 1",
          topic: "Introduction to the Periodic Table of Elements",
          notes: `
## What is an Element?

An element is a pure substance that cannot be broken down into simpler substances by chemical means. Each element is made up of only one type of atom.

Examples: Oxygen (O), Carbon (C), Hydrogen (H), Iron (Fe), Gold (Au).

**Key point:** An element is the simplest form of matter.

## The Periodic Table of Elements

The Periodic Table is a classification system for all known elements. It was devised by Dmitri Mendeleev in the 1860s. He arranged elements according to their properties in a table format. Today, elements are arranged in order of increasing atomic number.

Atomic number = the number of protons in an atom of that element.

## Three Main Categories of Elements

| Category | Location on Table | Properties |
|----------|-------------------|------------|
| Metals | Left-hand side | Shiny, ductile, malleable, solid (except mercury), good conductors of heat and electricity, high melting and boiling points |
| Semi-metals | Between metals and non-metals | Have some properties of metals and some of non-metals |
| Non-metals | Far right-hand side | Varied properties (some gases, some solids), poor conductors of electricity, not shiny |

## Common Elements and Their Symbols

You need to know the names and symbols of the first 20 elements:

| Element | Symbol | Element | Symbol |
|---------|--------|---------|--------|
| Hydrogen | H | Sodium | Na |
| Helium | He | Magnesium | Mg |
| Lithium | Li | Aluminium | Al |
| Beryllium | Be | Silicon | Si |
| Boron | B | Phosphorus | P |
| Carbon | C | Sulfur | S |
| Nitrogen | N | Chlorine | Cl |
| Oxygen | O | Argon | Ar |
| Fluorine | F | Potassium | K |
| Neon | Ne | Calcium | Ca |

## Metals, Non-metals and Semi-metals: Key Properties

### Metals:
- Shiny (lustrous)
- Good conductors of heat and electricity
- Malleable (can be hammered into shapes)
- Ductile (can be drawn into wires)
- Solid at room temperature (except mercury)
- High melting and boiling points

### Non-metals:
- Dull (not shiny)
- Poor conductors of heat and electricity
- Not malleable or ductile
- Can be solids, liquids or gases at room temperature
- Lower melting and boiling points than metals

### Semi-metals:
- Have properties of both metals and non-metals
- Examples: Silicon (Si), Boron (B)

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Element | A pure substance made of one type of atom |
| Periodic Table | A table that organises all known elements |
| Atomic number | The number of protons in an atom |
| Metal | Elements on the left side of the Periodic Table |
| Non-metal | Elements on the right side of the Periodic Table |
| Semi-metal | Elements between metals and non-metals |
| Symbol | A one or two letter abbreviation for an element |

### Worked Examples

**Example 1: Identifying elements**
Identify whether the following elements are metals, non-metals or semi-metals:
a) Sodium (Na)
b) Oxygen (O)
c) Silicon (Si)

**Solution:**
a) Sodium is a metal (found on the left side of the Periodic Table)
b) Oxygen is a non-metal (found on the right side)
c) Silicon is a semi-metal (found between metals and non-metals)

**Example 2: Properties of metals**
Why are metals used for electrical wiring?

**Solution:** Metals are good conductors of electricity. Copper and aluminium are commonly used because they allow electric current to flow easily through them.

**Example 3: Identifying elements from symbols**
What elements are represented by these symbols: Na, Cl, C, Ca?

**Solution:** Na = Sodium, Cl = Chlorine, C = Carbon, Ca = Calcium
`,
          questions: [
            { id: 1, question: "What is an element?", options: ["A mixture of different atoms", "A pure substance made of one type of atom", "A compound of two or more atoms", "A substance that can be broken down"], correct: 1 },
            { id: 2, question: "Who devised the Periodic Table?", options: ["Albert Einstein", "Isaac Newton", "Dmitri Mendeleev", "Marie Curie"], correct: 2 },
            { id: 3, question: "Where are metals found on the Periodic Table?", options: ["On the right-hand side", "On the left-hand side", "In the middle", "At the bottom"], correct: 1 },
            { id: 4, question: "What is the symbol for Sodium?", options: ["S", "So", "Na", "N"], correct: 2 },
            { id: 5, question: "Which of the following is a non-metal?", options: ["Iron (Fe)", "Copper (Cu)", "Oxygen (O)", "Gold (Au)"], correct: 2 },
            { id: 6, question: "What is the atomic number of an element?", options: ["The number of neutrons in an atom", "The number of protons in an atom", "The number of electrons in an atom", "The total number of protons and neutrons"], correct: 1 },
            { id: 7, question: "Which element has the symbol Cl?", options: ["Carbon", "Calcium", "Chlorine", "Chromium"], correct: 2 },
            { id: 8, question: "Which of the following is a property of metals?", options: ["Dull appearance", "Poor conductor of electricity", "Malleable", "Low melting point"], correct: 2 },
            { id: 9, question: "Semi-metals are found:", options: ["On the left side of the Periodic Table", "On the right side of the Periodic Table", "Between metals and non-metals", "At the bottom of the Periodic Table"], correct: 2 },
            { id: 10, question: "Which element is a semi-metal?", options: ["Sodium (Na)", "Silicon (Si)", "Oxygen (O)", "Carbon (C)"], correct: 1 },
            { id: 11, question: "What is the symbol for Calcium?", options: ["C", "Ca", "Cl", "Cu"], correct: 1 },
            { id: 12, question: "Which of the following is a property of non-metals?", options: ["Shiny appearance", "Good conductor of electricity", "Dull appearance", "Malleable"], correct: 2 },
            { id: 13, question: "How many elements are in the first 20 elements?", options: ["10", "15", "20", "25"], correct: 2 },
            { id: 14, question: "Which element is a liquid at room temperature?", options: ["Iron (Fe)", "Mercury (Hg)", "Sodium (Na)", "Chlorine (Cl)"], correct: 1 },
            { id: 15, question: "The Periodic Table is arranged in order of increasing:", options: ["Atomic mass", "Atomic number", "Atomic symbol", "Atomic size"], correct: 1 },
            { id: 16, question: "What is the symbol for Potassium?", options: ["P", "Po", "K", "Pt"], correct: 2 },
            { id: 17, question: "Which of the following is a metal?", options: ["Sulfur (S)", "Nitrogen (N)", "Gold (Au)", "Argon (Ar)"], correct: 2 },
            { id: 18, question: "Non-metals are generally:", options: ["Good conductors of heat", "Poor conductors of electricity", "Shiny", "Malleable"], correct: 1 },
            { id: 19, question: "Which element has the symbol H?", options: ["Helium", "Hydrogen", "Hafnium", "Holmium"], correct: 1 },
            { id: 20, question: "Semi-metals have:", options: ["Only properties of metals", "Only properties of non-metals", "Properties of both metals and non-metals", "No properties of either"], correct: 2 }
          ]
        },
        {
          id: "t2-w2-3",
          label: "Week 2-3",
          topic: "Atoms",
          notes: `
## The Building Blocks of Matter

All matter is made up of tiny particles called atoms.
- Atoms are incredibly small.
- Atoms of one element are identical.
- Atoms of different elements are different.

**Key point:** An atom is the smallest particle of an element that retains the properties of that element.

## Sub-atomic Particles

Atoms are made up of even smaller particles called sub-atomic particles.

| Particle | Charge | Location | Mass |
|----------|--------|----------|------|
| Proton | Positive (+) | Nucleus (centre) | Heavy |
| Neutron | Neutral (0) | Nucleus (centre) | Heavy (similar to proton) |
| Electron | Negative (-) | Moving around nucleus | Very light (about 1/2000 of proton) |

### Important:
- The nucleus is the central region of the atom
- Protons and neutrons are packed tightly in the nucleus
- Electrons move at extremely high speeds around the nucleus in an electron cloud
- Atoms are neutral because the number of protons (+) equals the number of electrons (-)

## The Structure of the Atom

\`\`\`
Nucleus: Protons (+) + Neutrons (0)
Electrons (-) moving around the nucleus
\`\`\`

## Atomic Number and Mass Number

- Atomic Number = number of protons
- Mass Number = number of protons + number of neutrons

**Example:** Carbon has 6 protons and 6 neutrons.
- Atomic number = 6
- Mass number = 6 + 6 = 12

---

## Pure Substances: Elements and Compounds

### Elements:
- Made up of only one kind of atom
- Cannot be broken down chemically
- Examples: O₂, H₂, N₂

### Compounds:
- Made up of two or more different atoms chemically bonded together
- Atoms are combined in a fixed ratio
- Can only be broken down by chemical reactions
- Examples: H₂O (water), CO₂ (carbon dioxide), NaCl (table salt)

Chemical bond = the force that holds atoms together in a compound.

Molecule = two or more atoms bonded together. Can be a molecule of an element (O₂) or a compound (H₂O).

## Chemical Formulae

A chemical formula shows the ratio of atoms in a compound. Subscripts tell you the number of atoms.

| Compound | Formula | What it tells us |
|----------|---------|------------------|
| Water | H₂O | 2 hydrogen atoms + 1 oxygen atom |
| Carbon dioxide | CO₂ | 1 carbon atom + 2 oxygen atoms |
| Table salt | NaCl | 1 sodium atom + 1 chlorine atom |
| Ammonia | NH₃ | 1 nitrogen atom + 3 hydrogen atoms |

## Mixtures vs Compounds

| Feature | Mixture | Compound |
|---------|---------|----------|
| Composition | Variable | Fixed ratio |
| Separation | Physical methods (filtering, sieving, distillation) | Chemical methods only |
| Properties | Retains properties of components | Different properties from components |

Example: Salt water is a mixture (salt + water). Table salt (NaCl) is a compound.

## Diatomic Molecules

Some elements exist as diatomic molecules (two atoms bonded together). These elements are found naturally as pairs.

**Diatomic elements:**
- H₂ (Hydrogen gas)
- N₂ (Nitrogen gas)
- O₂ (Oxygen gas)
- F₂ (Fluorine)
- Cl₂ (Chlorine gas)
- Br₂ (Bromine)
- I₂ (Iodine)

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Atom | The smallest particle of an element |
| Proton | Positively charged particle in the nucleus |
| Neutron | Neutral particle in the nucleus |
| Electron | Negatively charged particle around the nucleus |
| Nucleus | The centre of an atom containing protons and neutrons |
| Element | A pure substance made of one type of atom |
| Compound | A pure substance made of two or more elements chemically bonded |
| Molecule | Two or more atoms bonded together |
| Chemical bond | The force that holds atoms together |
| Chemical formula | Shows the ratio of atoms in a compound |
| Diatomic molecule | A molecule made of two atoms |

### Worked Examples

**Example 1: Sub-atomic particles**
How many protons, neutrons and electrons are in a neutral atom of carbon (atomic number 6, mass number 12)?

**Solution:**
- Protons = atomic number = 6
- Neutrons = mass number - atomic number = 12 - 6 = 6
- Electrons = protons (neutral atom) = 6

**Example 2: Reading chemical formulae**
What does the formula CO₂ tell us?

**Solution:** CO₂ is the formula for carbon dioxide. It tells us that one molecule of carbon dioxide contains:
- 1 carbon atom (C)
- 2 oxygen atoms (O₂)

**Example 3: Elements vs compounds**
Classify the following as an element or compound: H₂O, O₂, NaCl, N₂, CO₂

**Solution:**
- H₂O = Compound (hydrogen + oxygen)
- O₂ = Element (diatomic oxygen)
- NaCl = Compound (sodium + chlorine)
- N₂ = Element (diatomic nitrogen)
- CO₂ = Compound (carbon + oxygen)

**Example 4: Mixtures vs compounds**
How would you separate a mixture of salt and sand? Can you separate table salt (NaCl) the same way?

**Solution:**
- Salt and sand mixture: Add water, salt dissolves, filter to remove sand, evaporate water to get salt back. This uses physical methods.
- Table salt (NaCl): Cannot be separated by physical methods. It requires a chemical reaction (electrolysis) to separate sodium and chlorine.
`,
          questions: [
            { id: 1, question: "What is the smallest particle of an element?", options: ["A molecule", "A compound", "An atom", "A neutron"], correct: 2 },
            { id: 2, question: "Which sub-atomic particle has a positive charge?", options: ["Electron", "Neutron", "Proton", "Nucleus"], correct: 2 },
            { id: 3, question: "Where are protons and neutrons found in an atom?", options: ["In the electron cloud", "In the nucleus", "Outside the atom", "In the electron shell"], correct: 1 },
            { id: 4, question: "What is the charge of an electron?", options: ["Positive (+)", "Negative (-)", "Neutral (0)", "Both positive and negative"], correct: 1 },
            { id: 5, question: "Why is an atom neutral?", options: ["It has no charge", "The number of protons equals the number of electrons", "The number of protons equals the number of neutrons", "It has no protons"], correct: 1 },
            { id: 6, question: "What is the atomic number of an element?", options: ["The number of neutrons", "The number of protons", "The number of electrons + protons", "The number of protons + neutrons"], correct: 1 },
            { id: 7, question: "Which of the following is an element?", options: ["Water (H₂O)", "Carbon dioxide (CO₂)", "Oxygen (O₂)", "Table salt (NaCl)"], correct: 2 },
            { id: 8, question: "What does the formula H₂O tell us?", options: ["2 hydrogen atoms and 1 oxygen atom", "1 hydrogen atom and 2 oxygen atoms", "2 hydrogen atoms and 2 oxygen atoms", "1 hydrogen atom and 1 oxygen atom"], correct: 0 },
            { id: 9, question: "Which of the following is a compound?", options: ["N₂", "O₂", "CO₂", "H₂"], correct: 2 },
            { id: 10, question: "What holds atoms together in a compound?", options: ["Gravity", "Magnetic force", "Chemical bond", "Nuclear force"], correct: 2 },
            { id: 11, question: "What is a molecule?", options: ["A single atom", "Two or more atoms bonded together", "A sub-atomic particle", "A type of element"], correct: 1 },
            { id: 12, question: "Which of the following is a diatomic molecule?", options: ["H₂O", "CO₂", "O₂", "NaCl"], correct: 2 },
            { id: 13, question: "How can a compound be separated?", options: ["By filtering", "By sieving", "By chemical reactions", "By evaporating"], correct: 2 },
            { id: 14, question: "What is the mass number of an atom?", options: ["Number of protons", "Number of electrons", "Number of protons + neutrons", "Number of protons + electrons"], correct: 2 },
            { id: 15, question: "An atom has 8 protons and 8 neutrons. What is its mass number?", options: ["8", "16", "24", "4"], correct: 1 },
            { id: 16, question: "Which sub-atomic particle is the smallest?", options: ["Proton", "Neutron", "Electron", "All are the same size"], correct: 2 },
            { id: 17, question: "What is the difference between a mixture and a compound?", options: ["Mixtures have a fixed composition", "Compounds have a fixed composition", "Mixtures can only be separated chemically", "There is no difference"], correct: 1 },
            { id: 18, question: "Which of the following is NOT a diatomic element?", options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"], correct: 2 },
            { id: 19, question: "A compound contains:", options: ["Only one type of atom", "Two or more different atoms chemically bonded", "Two or more different atoms physically mixed", "Only non-metals"], correct: 1 },
            { id: 20, question: "In a neutral atom, the number of protons equals the number of:", options: ["Neutrons", "Electrons", "Protons + neutrons", "Molecules"], correct: 1 }
          ]
        },
        {
          id: "t2-w4-8",
          label: "Week 4-8",
          topic: "Particle Model of Matter",
          notes: `
## The Particle Model of Matter

1. All matter is made up of incredibly small particles (atoms or molecules)
2. There are forces between the particles
3. Particles are always moving (more energy = faster movement)
4. The spaces between particles are empty (they contain nothing, not air)

## Solids, Liquids and Gases

### Comparison of particles in each state:

| Property | Solid | Liquid | Gas |
|----------|-------|--------|-----|
| Arrangement | Closely packed in a regular arrangement | Loosely arranged but close together | No particular arrangement, far apart |
| Movement | Vibrate only | Slide past each other | Move very fast, random |
| Forces | Strong forces | Weaker forces | Very weak forces |
| Spaces | Very small spaces | Small spaces | Very large spaces |
| Shape | Fixed shape | Takes shape of container | Fills container |
| Volume | Fixed volume | Fixed volume | No fixed volume |
| Compressible? | No | Hardly | Yes (easily) |

---

## Diffusion

Diffusion is the movement of particles from a high concentration to a low concentration. Particles spread out until they are evenly distributed. Diffusion is faster in gases than in liquids. This is because gas particles have more space and collide less.

### Examples of diffusion:
- The smell of perfume spreading through a room
- Food colouring spreading through water
- The smell of cooking food reaching another room

### Factors affecting the rate of diffusion:
- Temperature (higher temperature = faster diffusion)
- Mass of particles (lighter particles diffuse faster)
- State (gases diffuse faster than liquids)

---

## Changes of State

A change of state is a physical change. The particles themselves don't change - only their arrangement and movement.

| Process | Change | Energy |
|---------|--------|--------|
| Melting | Solid → Liquid | Add heat |
| Evaporation/Boiling | Liquid → Gas | Add heat |
| Condensation | Gas → Liquid | Remove heat |
| Freezing/Solidifying | Liquid → Solid | Remove heat |

### What happens when we heat a substance?
- Particles gain energy
- They move faster
- They move further apart
- The substance expands

### What happens when we cool a substance?
- Particles lose energy
- They slow down
- They move closer together
- The substance contracts

---

## Density

Density = Mass ÷ Volume

### Key points:
- Density tells us how "tightly packed" the particles are
- In general: Solids > Liquids > Gases (densities)
- Water is an exception: Ice (solid) is less dense than water (liquid), so ice floats

### What affects density?
1. The mass of the individual particles
2. The size of the spaces between particles

### Examples:
- Oil floats on water because oil is less dense
- A brick is more dense than a sponge of the same size
- A balloon filled with air has very low density

---

## Pressure (Gases)

Gas particles are constantly moving. They collide with each other and with the walls of their container. The force of these collisions causes gas pressure.

### Factors affecting pressure:
1. **Number of particles:** More particles → more collisions → higher pressure
2. **Temperature:** Higher temperature → particles move faster → more forceful collisions → higher pressure
3. **Volume:** Smaller volume → particles are closer together → more collisions → higher pressure

### Examples:
- Pumping air into a tyre: more particles → higher pressure
- Heating a gas: particles move faster → higher pressure
- Squeezing gas into a smaller space: particles collide more → higher pressure

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Particle model | Theory that describes matter in terms of tiny particles |
| Solid | State with fixed shape, particles vibrate in place |
| Liquid | State with no fixed shape, particles slide past each other |
| Gas | State with no fixed shape, particles move freely |
| Diffusion | Movement of particles from high to low concentration |
| Melting | Solid to liquid (add heat) |
| Evaporation | Liquid to gas (add heat) |
| Condensation | Gas to liquid (remove heat) |
| Freezing | Liquid to solid (remove heat) |
| Density | Mass per unit volume (mass ÷ volume) |
| Expansion | Particles move further apart (heating) |
| Contraction | Particles move closer together (cooling) |
| Pressure | Force of gas particles colliding with container walls |

### Worked Examples

**Example 1: Particle arrangement**
Explain why a gas can be compressed but a solid cannot.

**Solution:** In a gas, the particles have very large spaces between them. They can be forced closer together (compressed) into a smaller space. In a solid, the particles are already closely packed with very small spaces. They cannot be pushed any closer together.

**Example 2: Diffusion**
A student opens a bottle of perfume at one end of a classroom. After a few minutes, a learner at the other end of the classroom can smell it. Explain why.

**Solution:** Perfume particles diffuse through the air. They move randomly from the high concentration area (near the bottle) to the low concentration area (the rest of the room). Gas particles move fast, so diffusion happens quickly.

**Example 3: Density**
A block of wood has a mass of 60g and a volume of 80mL. Calculate its density.

**Solution:** Density = Mass ÷ Volume = 60 ÷ 80 = 0.75 g/mL

**Example 4: Gas pressure**
Why does a balloon pop when you blow too much air into it?

**Solution:** As you blow more air into the balloon, the number of gas particles increases. More particles cause more collisions with the inside of the balloon, creating greater pressure. When the pressure becomes too great, the balloon's material cannot hold it, and the balloon pops.
`,
          questions: [
            { id: 1, question: "In which state of matter are particles arranged closely in a regular pattern?", options: ["Gas", "Liquid", "Solid", "All states"], correct: 2 },
            { id: 2, question: "Which state of matter has particles that move very fast and are far apart?", options: ["Solid", "Liquid", "Gas", "None of the above"], correct: 2 },
            { id: 3, question: "What is diffusion?", options: ["Particles moving from low to high concentration", "Particles moving from high to low concentration", "Particles staying in one place", "Particles breaking down"], correct: 1 },
            { id: 4, question: "In which state does diffusion happen fastest?", options: ["Solid", "Liquid", "Gas", "Same in all states"], correct: 2 },
            { id: 5, question: "What happens to particles when a substance is heated?", options: ["They slow down", "They move faster", "They move closer together", "They stop moving"], correct: 1 },
            { id: 6, question: "What is the process called when a liquid changes to a gas?", options: ["Melting", "Freezing", "Condensation", "Evaporation"], correct: 3 },
            { id: 7, question: "What is the process called when a gas changes to a liquid?", options: ["Melting", "Evaporation", "Condensation", "Freezing"], correct: 2 },
            { id: 8, question: "What is the formula for density?", options: ["Density = Mass × Volume", "Density = Mass ÷ Volume", "Density = Volume ÷ Mass", "Density = Mass + Volume"], correct: 1 },
            { id: 9, question: "Why does ice float on water?", options: ["Ice is denser than water", "Ice is less dense than water", "Ice is the same density as water", "Ice has no mass"], correct: 1 },
            { id: 10, question: "What causes gas pressure?", options: ["Particles sticking together", "Particles colliding with container walls", "Particles dissolving", "Particles freezing"], correct: 1 },
            { id: 11, question: "What happens when you pump more air into a tyre?", options: ["The pressure decreases", "The pressure stays the same", "The pressure increases", "The tyre becomes lighter"], correct: 2 },
            { id: 12, question: "What is the arrangement of particles in a liquid?", options: ["Closely packed in a regular pattern", "Far apart with no order", "Close together but not in a fixed position", "Fixed in position"], correct: 2 },
            { id: 13, question: "A substance changes from solid to liquid. What process has occurred?", options: ["Freezing", "Melting", "Condensation", "Evaporation"], correct: 1 },
            { id: 14, question: "Which material would float on water?", options: ["A metal block", "A glass marble", "A piece of wood", "A brick"], correct: 2 },
            { id: 15, question: "What happens to the spaces between particles during expansion?", options: ["They get smaller", "They get bigger", "They stay the same", "They disappear"], correct: 1 },
            { id: 16, question: "What happens to the spaces between particles during contraction?", options: ["They get smaller", "They get bigger", "They stay the same", "They disappear"], correct: 0 },
            { id: 17, question: "The particles in a solid:", options: ["Move freely", "Only vibrate", "Slide past each other", "Have no movement"], correct: 1 },
            { id: 18, question: "When water boils, it changes from:", options: ["Solid to liquid", "Liquid to gas", "Gas to liquid", "Liquid to solid"], correct: 1 },
            { id: 19, question: "A gas has no fixed shape because:", options: ["The particles are closely packed", "The particles can move freely", "The particles are fixed in position", "The particles have no energy"], correct: 1 },
            { id: 20, question: "In which state of matter are the spaces between particles the largest?", options: ["Solid", "Liquid", "Gas", "They are all the same"], correct: 2 }
          ]
        },
        {
          id: "t2-w9",
          label: "Week 9",
          topic: "Chemical Reactions",
          notes: `
## What is a Chemical Reaction?

A chemical reaction is a process where substances are changed into new substances with different properties.

During a chemical reaction:
- Chemical bonds break in the reactants
- New chemical bonds form to make products
- Atoms are rearranged (not created or destroyed)

## Signs of a Chemical Reaction

You can tell a chemical reaction has occurred when you see one or more of these signs:

1. Colour change (inside the reaction vessel)
2. Gas formed (bubbles appear - not from boiling)
3. Solid formed (precipitate or crystals appear)
4. Temperature change (gets hotter or colder)
5. Smell (new substance with a strong odour forms)
6. Sound (e.g., an explosion)

Note: A change of state (melting, boiling) is a physical change, not a chemical reaction.

## Reactants and Products

- Reactants = substances you start with (before the reaction)
- Products = substances formed during the reaction (after the reaction)

### Word equation:
\`\`\`
Reactants → Products
\`\`\`

### Example:
\`\`\`
Eggshell + Vinegar → Calcium acetate + Carbon dioxide + Water
\`\`\`

## Chemical Equations

A chemical equation shows the reaction using chemical formulae.

### Example:
\`\`\`
CaCO₃ + 2CH₃COOH → Ca(CH₃COO)₂ + CO₂ + H₂O
\`\`\`

### Key points:
- The same number of atoms of each element must be on both sides
- Atoms are rearranged, not created or destroyed

---

## Fermentation

Fermentation is a chemical reaction where microorganisms (like yeast) break down sugar.

### Word equation:
\`\`\`
Sugar → Alcohol + Carbon dioxide
\`\`\`

### Uses of fermentation:
- Making bread (carbon dioxide makes it rise)
- Making beer and wine (alcohol is produced)
- Making yoghurt and cheese (bacteria ferment milk)

### Indigenous knowledge:
- Traditional South African ginger beer is made through fermentation
- This process has been used for generations in many cultures

---

## Respiration and Photosynthesis as Chemical Reactions

### Photosynthesis:
\`\`\`
Carbon dioxide + Water → Glucose + Oxygen
\`\`\`

### Respiration:
\`\`\`
Glucose + Oxygen → Carbon dioxide + Water + Energy
\`\`\`

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Chemical reaction | Process where substances change into new substances |
| Reactant | Substance present before the reaction |
| Product | Substance formed during the reaction |
| Chemical bond | The force that holds atoms together |
| Fermentation | Yeast breaks down sugar into alcohol and CO₂ |
| Physical change | Change of state (no new substance formed) |
| Chemical change | New substances are formed |

### Worked Examples

**Example 1: Identifying reactants and products**
In the reaction: Vinegar + Baking soda → Carbon dioxide + Water + Sodium acetate
Identify the reactants and products.

**Solution:** Reactants: Vinegar and Baking soda. Products: Carbon dioxide, Water and Sodium acetate.

**Example 2: Signs of a chemical reaction**
A learner mixes two clear liquids in a beaker. The mixture becomes warm and turns cloudy. What signs show that a chemical reaction has occurred?

**Solution:** Temperature change (the mixture became warm) and Solid formed (it turned cloudy - a precipitate formed).

**Example 3: Fermentation**
Bread dough left in a warm place rises. Explain why.

**Solution:** Yeast in the dough ferments sugar through a chemical reaction. The reaction produces carbon dioxide gas. The gas bubbles get trapped in the dough, causing it to rise.
`,
          questions: [
            { id: 1, question: "What is a chemical reaction?", options: ["A change of state", "A process where new substances are formed", "A process where substances are mixed", "A process where particles are separated"], correct: 1 },
            { id: 2, question: "Which of the following is a sign of a chemical reaction?", options: ["A colour change", "Melting", "Boiling", "Freezing"], correct: 0 },
            { id: 3, question: "What are reactants?", options: ["Substances formed during a reaction", "Substances present before a reaction", "Substances that are not changed", "Substances that evaporate"], correct: 1 },
            { id: 4, question: "What are products?", options: ["Substances present before a reaction", "Substances formed during a reaction", "Substances that are not changed", "Substances that dissolve"], correct: 1 },
            { id: 5, question: "During a chemical reaction, chemical bonds:", options: ["Are not affected", "Break and new ones form", "Only break", "Only form"], correct: 1 },
            { id: 6, question: "What is fermentation?", options: ["Yeast breaking down sugar into alcohol and CO₂", "Plants making food from CO₂ and water", "Animals releasing energy from food", "Water freezing into ice"], correct: 0 },
            { id: 7, question: "What is produced during fermentation?", options: ["Glucose and oxygen", "Alcohol and carbon dioxide", "Water and oxygen", "Salt and sugar"], correct: 1 },
            { id: 8, question: "Which of the following is a physical change?", options: ["Burning wood", "Rusting iron", "Melting ice", "Fermenting sugar"], correct: 2 },
            { id: 9, question: "In a chemical equation, the arrow means:", options: ["Produces", "Adds", "Subtracts", "Equals"], correct: 0 },
            { id: 10, question: "What happens to atoms during a chemical reaction?", options: ["They are destroyed", "They are created", "They are rearranged", "They disappear"], correct: 2 },
            { id: 11, question: "Which of the following is a product of respiration?", options: ["Glucose", "Oxygen", "Carbon dioxide", "Sunlight"], correct: 2 },
            { id: 12, question: "Which of the following is a reactant in photosynthesis?", options: ["Glucose", "Oxygen", "Carbon dioxide", "All of the above"], correct: 2 },
            { id: 13, question: "When bread rises, what gas is produced?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], correct: 2 },
            { id: 14, question: "What is a precipitate?", options: ["A solid formed in a chemical reaction", "A gas produced in a chemical reaction", "A colour change", "A temperature change"], correct: 0 },
            { id: 15, question: "Which process is NOT a chemical reaction?", options: ["Rusting", "Burning", "Melting", "Fermenting"], correct: 2 },
            { id: 16, question: "The formation of bubbles can be a sign of a chemical reaction unless:", options: ["The liquid is boiling", "The liquid is cold", "The bubbles are small", "The bubbles are colourful"], correct: 0 },
            { id: 17, question: "What is the word equation for photosynthesis?", options: ["Glucose + Oxygen → Carbon dioxide + Water", "Carbon dioxide + Water → Glucose + Oxygen", "Sugar → Alcohol + Carbon dioxide", "Carbon + Oxygen → Carbon dioxide"], correct: 1 },
            { id: 18, question: "What is the word equation for respiration?", options: ["Glucose + Oxygen → Carbon dioxide + Water + Energy", "Carbon dioxide + Water → Glucose + Oxygen", "Sugar → Alcohol + Carbon dioxide", "Carbon + Oxygen → Carbon dioxide"], correct: 0 },
            { id: 19, question: "In the reaction Vinegar + Baking soda → Sodium acetate + Water + Carbon dioxide, the reactants are:", options: ["Sodium acetate and Water", "Carbon dioxide and Water", "Vinegar and Baking soda", "Sodium acetate and Carbon dioxide"], correct: 2 },
            { id: 20, question: "A traditional South African drink made using fermentation is:", options: ["Coca-Cola", "Ginger beer", "Tea", "Coffee"], correct: 1 }
          ]
        }
      ]
    },
    term3: {
      id: "term3",
      label: "Term 3",
      weeks: [
        {
          id: "t3-w1",
          label: "Week 1",
          topic: "Static Electricity",
          notes: `
## What is Static Electricity?

Static electricity is caused by the build-up of electric charge on the surface of an object.

- It is created by friction (rubbing) between two materials.
- Electrons are transferred from one material to another.
- The material that loses electrons becomes positive (+)
- The material that gains electrons becomes negative (-)
- Only electrons move. Protons and neutrons do not move.

---

## Charging Objects

When you rub two different materials together:

| Material A | Material B | Result |
|------------|------------|--------|
| Loses electrons | Gains electrons | A becomes (+) / B becomes (-) |
| Gains electrons | Loses electrons | A becomes (-) / B becomes (+) |

### Examples:
- Rubbing a balloon on hair: electrons move from hair to balloon → balloon is (-), hair is (+)
- Rubbing a glass rod with silk: electrons move from glass to silk → glass is (+), silk is (-)
- Rubbing a plastic ruler with wool: electrons move from wool to ruler → ruler is (-), wool is (+)

---

## The Law of Charges

- Like charges repel (push apart)
  - (+) and (+) repel
  - (-) and (-) repel

- Unlike charges attract (pull together)
  - (+) and (-) attract

- Neutral objects: No charge. They will be attracted to both positive and negative objects.

---

## Discharge

Discharge is the sudden movement of electrons. This causes sparks or shocks.

- Happens more easily when the air is dry
- In humid air, moisture on surfaces prevents charge build-up

### Examples:
- Touching a car door after getting out of the car (spark)
- Hair standing up when pulling off a jersey
- Lightning (a giant discharge between clouds or between clouds and the ground)

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Static electricity | Build-up of electric charge on a surface |
| Friction | Rubbing two materials together |
| Electron | Negatively charged particle that moves |
| Positive (+) charge | Object that has lost electrons |
| Negative (-) charge | Object that has gained electrons |
| Repel | Push apart (like charges) |
| Attract | Pull together (unlike charges) |
| Discharge | Sudden movement of electrons (spark/shock) |

### Worked Examples

**Example 1: Charging by friction**
A balloon is rubbed on a wool jersey. The balloon becomes negatively charged. What happens to the jersey?

**Solution:** The balloon gains electrons from the jersey → balloon becomes (-). The jersey loses electrons → jersey becomes (+).

**Example 2: Like and unlike charges**
Two charged rods are brought close to each other. One has a positive charge, the other has a negative charge. What will happen?

**Solution:** They will attract each other because unlike charges attract (+ and - attract).

**Example 3: Static discharge**
Why do you sometimes get a shock when touching a metal door handle after walking across a carpet?

**Solution:** Walking on the carpet causes friction. Electrons are transferred from the carpet to your shoes and body. Your body becomes charged. When you touch the metal handle, the electrons quickly move from your body to the metal (which is a conductor), causing a small spark.
`,
          questions: [
            { id: 1, question: "What causes static electricity?", options: ["Moving electrons", "Moving protons", "Moving neutrons", "Moving atoms"], correct: 0 },
            { id: 2, question: "What particles are transferred during rubbing?", options: ["Protons", "Neutrons", "Electrons", "All of the above"], correct: 2 },
            { id: 3, question: "When a balloon is rubbed on hair, the balloon becomes:", options: ["Positive", "Negative", "Neutral", "Both positive and negative"], correct: 1 },
            { id: 4, question: "What charge does an object have if it loses electrons?", options: ["Positive", "Negative", "Neutral", "Cannot be determined"], correct: 0 },
            { id: 5, question: "What happens when two positively charged objects are brought together?", options: ["They attract", "They repel", "Nothing happens", "They discharge"], correct: 1 },
            { id: 6, question: "What happens when a positive and negative object are brought together?", options: ["They attract", "They repel", "Nothing happens", "They neutralise"], correct: 0 },
            { id: 7, question: "What is static discharge?", options: ["The build-up of charge", "The sudden movement of electrons", "The transfer of protons", "The creation of charge"], correct: 1 },
            { id: 8, question: "Why do we get more static shocks in dry air?", options: ["Electrons move faster in dry air", "Moisture on surfaces prevents charge build-up", "Protons move more easily", "There are more electrons in dry air"], correct: 1 },
            { id: 9, question: "What happens when you rub a plastic ruler with a wool cloth?", options: ["Electrons move from ruler to wool", "Electrons move from wool to ruler", "Protons move from ruler to wool", "Protons move from wool to ruler"], correct: 1 },
            { id: 10, question: "The law of charges states that:", options: ["Like charges attract, unlike charges repel", "Like charges repel, unlike charges attract", "Like charges repel, unlike charges repel", "Like charges attract, unlike charges attract"], correct: 1 },
            { id: 11, question: "A neutral object will be:", options: ["Attracted to both positive and negative objects", "Repelled by both positive and negative objects", "Attracted to positive only", "Attracted to negative only"], correct: 0 },
            { id: 12, question: "Which of the following is an example of static electricity?", options: ["A light bulb glowing", "A battery powering a phone", "Hair standing up when you pull off a jersey", "A kettle boiling water"], correct: 2 },
            { id: 13, question: "When a glass rod is rubbed with silk, the glass rod becomes positive. This means:", options: ["The glass rod gained electrons", "The glass rod lost electrons", "The glass rod gained protons", "The glass rod lost protons"], correct: 1 },
            { id: 14, question: "Lightning is an example of:", options: ["Static discharge", "Friction", "Conducting electricity", "Resistance"], correct: 0 },
            { id: 15, question: "Rubbing two materials together to create static electricity is called:", options: ["Conduction", "Friction", "Induction", "Discharge"], correct: 1 },
            { id: 16, question: "A negatively charged object has:", options: ["More protons than electrons", "More electrons than protons", "Equal protons and electrons", "No protons"], correct: 1 },
            { id: 17, question: "A positively charged object has:", options: ["More protons than electrons", "More electrons than protons", "Equal protons and electrons", "No protons"], correct: 0 },
            { id: 18, question: "What happens when electrons move from one object to another?", options: ["Both objects become neutral", "One object becomes positive, the other negative", "Both objects become positive", "Both objects become negative"], correct: 1 },
            { id: 19, question: "Static electricity can be dangerous when:", options: ["Refuelling a car", "Walking on a carpet", "Rubbing a balloon", "Wearing wool clothes"], correct: 0 },
            { id: 20, question: "A balloon sticks to a wall after being rubbed on hair. Why?", options: ["The balloon is attracted to the wall", "The balloon has opposite charges to the wall's neutral surface", "The wall is positively charged", "The balloon is heavy"], correct: 1 }
          ]
        },
        {
          id: "t3-w2-4",
          label: "Week 2-4",
          topic: "Energy Transfer in Electrical Systems",
          notes: `
## Circuits and Current Electricity

- Electric circuit: A complete pathway for electricity to flow.
- Electric current: The flow of electric charges (electrons) along a conductor.
- A current will only flow in a CLOSED circuit.

## Components of a Circuit

| Component | Function |
|-----------|----------|
| Cell/Battery | Source of chemical potential energy |
| Conducting wire | Carries the current |
| Switch | Opens or closes the circuit |
| Resistor | Opposes the flow of current |
| Bulb | Converts electrical energy to light and heat |
| Ammeter | Measures current (placed in series) |

## Circuit Symbols

Learn to draw and interpret these symbols:
- Cell:
- Battery:
- Bulb:
- Switch (open):
- Switch (closed):
- Resistor:
- Ammeter:

---

## Effects of an Electric Current

### 1. Heating effect:
- Current passes through a resistor → it heats up
- The resistor has high resistance → energy is transferred as heat
- Examples: kettle, iron, toaster, geyser, fuse

### 2. Magnetic effect:
- Current in a wire creates a magnetic field
- Can be used to make electromagnets
- Examples: electric bells, speakers, magnetic trains

### 3. Chemical effect:
- Electrolysis: Current breaks down a compound
- Example: Copper chloride solution → copper metal + chlorine gas

---

## Electrolysis

- Copper chloride solution + Electric current → Copper metal + Chlorine gas
- Copper forms on the negative electrode (cathode)
- Chlorine gas forms at the positive electrode (anode)
- You can see bubbles at the anode
- The solution becomes less blue as copper is removed

---

## Conductors and Insulators

### Conductors: Allow electricity to flow through them
- Metals (copper, aluminium, silver, gold)
- Water with dissolved salts

### Insulators: Do not allow electricity to flow through them
- Plastics
- Rubber
- Glass
- Ceramics
- Wood

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Circuit | A complete pathway for electricity |
| Electric current | Flow of electric charges |
| Cell | Source of chemical potential energy |
| Switch | Controls the flow of current |
| Resistor | Opposes the flow of current |
| Conductor | Allows current to flow |
| Insulator | Prevents current from flowing |
| Heating effect | Current produces heat |
| Magnetic effect | Current produces a magnetic field |
| Electrolysis | Current breaks down a compound |

### Worked Examples

**Example 1: Circuit components**
A circuit contains a battery, a switch, a bulb, and wires. Draw the circuit diagram using the correct symbols.

**Solution:** [Cell symbol] - [Switch symbol] - [Bulb symbol] - connected with wires in a complete loop.

**Example 2: Effects of an electric current**
An electric kettle is connected to a power supply. What effect of an electric current is being used?

**Solution:** Heating effect. The current passes through a high-resistance element in the kettle, producing heat.

**Example 3: Electrolysis**
A student uses electrolysis to break down copper chloride solution. What would they observe at the two electrodes?

**Solution:** At the negative electrode (cathode): a reddish-brown deposit of copper metal forms. At the positive electrode (anode): bubbles of chlorine gas form.
`,
          questions: [
            { id: 1, question: "What is an electric current?", options: ["The flow of protons", "The flow of electrons", "The flow of neutrons", "The flow of atoms"], correct: 1 },
            { id: 2, question: "A current will only flow in:", options: ["An open circuit", "A closed circuit", "A broken circuit", "Any circuit"], correct: 1 },
            { id: 3, question: "What is the function of a cell in a circuit?", options: ["To allow current to flow", "To provide chemical potential energy", "To control the flow of current", "To measure current"], correct: 1 },
            { id: 4, question: "What is the function of a switch in a circuit?", options: ["To provide energy", "To measure current", "To control the circuit", "To convert energy to light"], correct: 2 },
            { id: 5, question: "Which of the following is a conductor?", options: ["Plastic", "Rubber", "Copper", "Glass"], correct: 2 },
            { id: 6, question: "Which of the following is an insulator?", options: ["Aluminium", "Silver", "Plastic", "Copper"], correct: 2 },
            { id: 7, question: "What effect does a current passing through a resistor produce?", options: ["Light only", "Heat", "Sound", "Movement"], correct: 1 },
            { id: 8, question: "Which appliance uses the heating effect of electricity?", options: ["A TV", "A kettle", "A radio", "A phone"], correct: 1 },
            { id: 9, question: "What is electrolysis?", options: ["Current producing heat", "Current producing magnetism", "Current breaking down a compound", "Current lighting a bulb"], correct: 2 },
            { id: 10, question: "During electrolysis of copper chloride, where does copper form?", options: ["At the positive electrode", "At the negative electrode", "In the solution", "At both electrodes"], correct: 1 },
            { id: 11, question: "What gas forms at the positive electrode during electrolysis of copper chloride?", options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"], correct: 2 },
            { id: 12, question: "What is a resistor?", options: ["A component that allows current to flow freely", "A component that opposes current flow", "A component that provides energy", "A component that measures current"], correct: 1 },
            { id: 13, question: "Electromagnets use which effect of an electric current?", options: ["Heating effect", "Magnetic effect", "Chemical effect", "Light effect"], correct: 1 },
            { id: 14, question: "A circuit with a broken pathway is called:", options: ["A closed circuit", "An open circuit", "A complete circuit", "A parallel circuit"], correct: 1 },
            { id: 15, question: "A fuse uses which effect of an electric current?", options: ["Magnetic effect", "Chemical effect", "Heating effect", "Light effect"], correct: 2 },
            { id: 16, question: "Which material is commonly used for electrical wires?", options: ["Rubber", "Glass", "Plastic", "Copper"], correct: 3 },
            { id: 17, question: "Plastics are used as insulators because they:", options: ["Allow electrons to flow easily", "Prevent electrons from flowing", "Conduct heat well", "Are shiny"], correct: 1 },
            { id: 18, question: "In electrolysis, what happens at the electrodes?", options: ["Chemical reactions occur", "Heat is produced", "Light is produced", "Nothing happens"], correct: 0 },
            { id: 19, question: "A geyser uses electricity to heat water. This is an example of:", options: ["Magnetic effect", "Chemical effect", "Heating effect", "Light effect"], correct: 2 },
            { id: 20, question: "Which component is used to measure current in a circuit?", options: ["Resistor", "Switch", "Ammeter", "Cell"], correct: 2 }
          ]
        },
        {
          id: "t3-w5-6",
          label: "Week 5-6",
          topic: "Series and Parallel Circuits",
          notes: `
## Series Circuits

In a series circuit, components are connected one after another on a single path.

### Properties of series circuits:
1. Current is the same everywhere
2. Adding more resistors decreases current → bulbs get dimmer
3. Adding more cells increases current → bulbs get brighter
4. If one component breaks, the whole circuit stops

**Example:**
\`\`\`
[Battery] -- [Bulb 1] -- [Bulb 2] -- [Bulb 3]
\`\`\`

---

## Parallel Circuits

In a parallel circuit, components are connected in separate branches.

### Properties of parallel circuits:
1. Current splits between branches
2. Adding more resistors in parallel increases total current → bulbs get brighter (same brightness)
3. Adding more cells in parallel does not change current
4. If one branch breaks, others still work

**Example:**
\`\`\`
[Battery] -- [Bulb 1]
          -- [Bulb 2]
          -- [Bulb 3]
\`\`\`

---

## Series vs Parallel - Summary

| Feature | Series | Parallel |
|---------|--------|----------|
| Number of paths | One path only | Multiple paths |
| Current | Same everywhere | Splits between branches |
| Adding bulbs | Gets dimmer | Gets brighter |
| One bulb breaks | All stop working | Others still work |
| Household wiring | No | Yes |

---

## Current in Series and Parallel

### Series:
Current is the same at all points: I₁ = I₂ = I₃

### Parallel:
Total current = sum of currents in each branch: I_total = I₁ + I₂ + I₃

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Series circuit | Components on a single path |
| Parallel circuit | Components on multiple paths |
| Current (I) | Flow of electric charges |
| Main current | Current before splitting |
| Branch current | Current in a parallel branch |

### Worked Examples

**Example 1: Series circuit**
Three identical bulbs are connected in series to a battery. What happens to the brightness if you add a fourth bulb?

**Solution:** Adding a bulb in series increases resistance, which decreases current. The bulbs become dimmer.

**Example 2: Parallel circuit**
Two identical bulbs are connected in parallel to a battery. What happens if one bulb breaks?

**Solution:** The other bulb continues to work because it has its own complete pathway. The current continues to flow through the other branch.

**Example 3: Series vs Parallel**
A house has many lights that can be switched on and off independently. Are these lights connected in series or parallel? Explain.

**Solution:** Parallel. If they were in series, switching one off would break the entire circuit, turning all lights off.
`,
          questions: [
            { id: 1, question: "In a series circuit, the current is:", options: ["Different at different points", "The same everywhere", "Zero", "Very large"], correct: 1 },
            { id: 2, question: "What happens when you add more bulbs in series?", options: ["Bulbs get brighter", "Bulbs get dimmer", "Bulbs stay the same brightness", "Bulbs turn off"], correct: 1 },
            { id: 3, question: "In a parallel circuit, the current:", options: ["Is the same everywhere", "Splits between branches", "Is zero", "Only flows in one branch"], correct: 1 },
            { id: 4, question: "What happens when you add more bulbs in parallel?", options: ["Bulbs get brighter", "Bulbs get dimmer", "Bulbs stay the same brightness", "Bulbs turn off"], correct: 2 },
            { id: 5, question: "If one bulb breaks in a series circuit:", options: ["Other bulbs stay on", "All bulbs go off", "Only the broken bulb goes off", "The current increases"], correct: 1 },
            { id: 6, question: "If one bulb breaks in a parallel circuit:", options: ["Other bulbs stay on", "All bulbs go off", "Only the broken bulb goes off", "The current increases"], correct: 0 },
            { id: 7, question: "Household electrical wiring uses:", options: ["Series circuits", "Parallel circuits", "A mix of both", "Neither"], correct: 1 },
            { id: 8, question: "Adding more cells in series makes bulbs:", options: ["Brighter", "Dimmer", "Stay the same", "Turn off"], correct: 0 },
            { id: 9, question: "Adding more cells in parallel makes bulbs:", options: ["Brighter", "Dimmer", "Stay the same", "Turn off"], correct: 2 },
            { id: 10, question: "In a series circuit, the main current is:", options: ["Greater than the branch current", "Equal to the branch current", "Less than the branch current", "Zero"], correct: 1 },
            { id: 11, question: "In a parallel circuit, the main current is:", options: ["Equal to the sum of the branch currents", "Equal to the branch current", "Less than the branch current", "Zero"], correct: 0 },
            { id: 12, question: "Three bulbs in parallel are connected to a battery. If one bulb burns out:", options: ["The other two stay on", "All go off", "The other two get dimmer", "The other two get brighter"], correct: 0 },
            { id: 13, question: "Which circuit would you use for Christmas tree lights?", options: ["Series circuit", "Parallel circuit", "Either would work", "Neither would work"], correct: 0 },
            { id: 14, question: "In a series circuit with two bulbs, the bulbs are:", options: ["The same brightness", "Different brightness", "Very bright", "Very dim"], correct: 0 },
            { id: 15, question: "The advantage of a parallel circuit over a series circuit is:", options: ["It uses less energy", "One bulb breaking does not affect others", "It is cheaper to build", "It requires fewer wires"], correct: 1 },
            { id: 16, question: "What happens to the total resistance when you add more resistors in series?", options: ["It increases", "It decreases", "It stays the same", "It becomes zero"], correct: 0 },
            { id: 17, question: "What happens to the total resistance when you add more resistors in parallel?", options: ["It increases", "It decreases", "It stays the same", "It becomes zero"], correct: 1 },
            { id: 18, question: "A circuit has a main current of 3A. In a parallel branch, one ammeter reads 1A. What is the current in the other branch?", options: ["1A", "2A", "3A", "4A"], correct: 1 },
            { id: 19, question: "A series circuit has a battery and two bulbs. If you add a third bulb in series, the current will:", options: ["Increase", "Decrease", "Stay the same", "Stop"], correct: 1 },
            { id: 20, question: "In a parallel circuit, all bulbs have the same:", options: ["Voltage", "Current", "Resistance", "Power"], correct: 0 }
          ]
        },
        {
          id: "t3-w7-9",
          label: "Week 7-9",
          topic: "Visible Light",
          notes: `
## Properties of Light

1. Light travels in straight lines
2. Light travels at 300,000 km/s in empty space
3. Light from the Sun takes 8 minutes to reach Earth
4. Light is emitted from luminous objects (Sun, light bulbs, fire)

---

## The Spectrum of Visible Light

White light is made up of 7 colours:
\`\`\`
Red → Orange → Yellow → Green → Blue → Indigo → Violet (ROYGBIV)
\`\`\`

### Dispersion:
Splitting white light into its 7 colours.
- A prism can split white light
- Each colour bends differently when it passes through the prism
- Violet bends the most, red bends the least

---

## Opaque, Transparent and Translucent

| Type | What happens to light | Example |
|------|----------------------|---------|
| Opaque | No light passes through | Wood, metal, cardboard |
| Transparent | Light passes through clearly | Glass, clear plastic, water |
| Translucent | Some light passes through | Frosted glass, tissue paper |

### Shadows:
- Opaque objects cast dark shadows (no light gets through)
- Translucent objects cast faint shadows (some light gets through)
- Transparent objects cast no shadows

---

## Absorption and Reflection

### What gives objects their colour?
- An object reflects the colour(s) we see
- An object absorbs the colours we don't see

| Object colour | What it reflects | What it absorbs |
|---------------|------------------|-----------------|
| White | All colours | Nothing |
| Black | Nothing | All colours |
| Red | Red | All other colours |
| Green | Green | All other colours |
| Blue | Blue | All other colours |

### Why black objects get hotter in the sun:
- Black objects absorb all light (all colours)
- This energy is converted to heat
- White objects reflect all light, so they stay cooler

---

## Reflection of Light

### Law of Reflection:
Angle of incidence (i) = Angle of reflection (r)

Both are measured from the normal (an imaginary line perpendicular to the surface)

- Specular reflection: Smooth surface (mirror) → clear image
- Diffuse reflection: Rough surface → light scattered, no clear image

---

## Refraction of Light

Refraction is the bending of light when it passes from one transparent medium to another.

- Air → Glass (more dense): light bends towards the normal
- Glass → Air (less dense): light bends away from the normal

### Examples of refraction:
- A straw looking bent in a glass of water
- A coin appearing to be higher than it is in water
- Rainbow formation

### Lenses:
- Convex lens: Focuses light (converging)
- Concave lens: Spreads light (diverging)

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Visible light | The part of the spectrum we can see |
| Spectrum | 7 colours of visible light |
| Dispersion | Splitting white light into colours |
| Opaque | Light cannot pass through |
| Transparent | Light passes through clearly |
| Translucent | Some light passes through |
| Reflection | Light bounces off a surface |
| Refraction | Light bends when passing through a medium |
| Angle of incidence | Angle between incident ray and normal |
| Angle of reflection | Angle between reflected ray and normal |
| Lens | Curved transparent object that bends light |

### Worked Examples

**Example 1: Reflection**
A light ray strikes a mirror at an angle of 35° to the normal. What is the angle of reflection?

**Solution:** Angle of incidence = Angle of reflection. Angle of reflection = 35°.

**Example 2: Refraction**
A light ray passes from air into glass. Does it bend towards or away from the normal?

**Solution:** Towards the normal. Light bends towards the normal when moving from a less dense medium (air) to a more dense medium (glass).

**Example 3: Colour of objects**
A leaf appears green. Explain why.

**Solution:** The leaf reflects green light and absorbs all other colours of light. Only the green light reaches our eyes, so the leaf looks green.
`,
          questions: [
            { id: 1, question: "What is the speed of light in empty space?", options: ["300,000 m/s", "300,000 km/s", "3,000 km/s", "30,000 km/s"], correct: 1 },
            { id: 2, question: "How long does light take to travel from the Sun to Earth?", options: ["8 seconds", "8 minutes", "8 hours", "8 days"], correct: 1 },
            { id: 3, question: "What is the correct order of colours in the visible spectrum?", options: ["Red, Orange, Yellow, Green, Blue, Indigo, Violet", "Violet, Indigo, Blue, Green, Yellow, Orange, Red", "Red, Yellow, Orange, Green, Blue, Violet, Indigo", "Blue, Green, Yellow, Orange, Red, Violet, Indigo"], correct: 0 },
            { id: 4, question: "What is dispersion?", options: ["Combining all colours into white light", "Splitting white light into its colours", "Absorbing all light", "Reflecting all light"], correct: 1 },
            { id: 5, question: "Which colour bends the most when passing through a prism?", options: ["Red", "Yellow", "Violet", "Green"], correct: 2 },
            { id: 6, question: "What is an opaque object?", options: ["Light passes through clearly", "No light passes through", "Some light passes through", "Light is scattered"], correct: 1 },
            { id: 7, question: "What is a transparent object?", options: ["Light passes through clearly", "No light passes through", "Some light passes through", "Light is scattered"], correct: 0 },
            { id: 8, question: "What colour does a white object reflect?", options: ["No colours", "All colours", "Only white", "Only black"], correct: 1 },
            { id: 9, question: "What colour does a black object absorb?", options: ["No colours", "All colours", "Only white", "Only black"], correct: 1 },
            { id: 10, question: "A red apple appears red because it reflects:", options: ["All colours", "No colours", "Red light", "Green light"], correct: 2 },
            { id: 11, question: "The law of reflection states that:", options: ["Angle of incidence = Angle of reflection", "Angle of incidence > Angle of reflection", "Angle of incidence < Angle of reflection", "Angle of incidence = 0"], correct: 0 },
            { id: 12, question: "A light ray strikes a mirror at 45° to the normal. What is the angle of reflection?", options: ["0°", "45°", "90°", "135°"], correct: 1 },
            { id: 13, question: "What is refraction?", options: ["Light bouncing off a surface", "Light bending when passing through a medium", "Light being absorbed", "Light being emitted"], correct: 1 },
            { id: 14, question: "When light moves from air to glass, it bends:", options: ["Towards the normal", "Away from the normal", "Parallel to the surface", "Not at all"], correct: 0 },
            { id: 15, question: "A convex lens:", options: ["Spreads light out", "Focuses light", "Reflects light", "Absorbs light"], correct: 1 },
            { id: 16, question: "Which object would cast the darkest shadow?", options: ["Glass", "Clear plastic", "Wooden block", "Water"], correct: 2 },
            { id: 17, question: "A leaf looks green because it:", options: ["Reflects green light", "Absorbs green light", "Reflects all light", "Absorbs all light"], correct: 0 },
            { id: 18, question: "Specular reflection occurs on:", options: ["A rough surface", "A smooth surface", "A transparent surface", "A translucent surface"], correct: 1 },
            { id: 19, question: "A straw appears bent in water because of:", options: ["Reflection", "Refraction", "Absorption", "Diffusion"], correct: 1 },
            { id: 20, question: "The normal is:", options: ["The line along the surface", "A line perpendicular to the surface", "The incident ray", "The reflected ray"], correct: 1 }
          ]
        }
      ]
    },
    term4: {
      id: "term4",
      label: "Term 4",
      weeks: [
        {
          id: "t4-w1-3",
          label: "Week 1-3",
          topic: "The Solar System",
          notes: `
## The Sun

- A star – produces light and heat
- Energy comes from nuclear fusion (hydrogen → helium)
- Medium-sized star
- DO NOT look directly at the Sun – permanent eye damage
- Sunspots = cooler areas on the surface

---

## The Planets

Order of planets from the Sun:
\`\`\`
Mercury → Venus → Earth → Mars → Jupiter → Saturn → Uranus → Neptune
\`\`\`

### Two types of planets:

| Type | Planets | Features |
|------|---------|----------|
| Terrestrial (rocky) | Mercury, Venus, Earth, Mars | Small, dense, solid surface, few moons |
| Gas giants | Jupiter, Saturn, Uranus, Neptune | Large, low density, no solid surface, many moons, rings |

---

## Other Objects in the Solar System

| Object | Description | Location |
|--------|-------------|----------|
| Asteroids | Rocky objects | Mostly between Mars and Jupiter |
| Dwarf planets | Small planets that haven't cleared their orbit | E.g., Pluto in the Kuiper Belt |
| Comets | Icy bodies with tails | From Oort Cloud |
| Kuiper Belt | Region beyond Neptune | Contains icy objects, dwarf planets |
| Oort Cloud | Outer edge of solar system | Contains billions of icy objects |

Gravity is the force that keeps all objects in orbit around the Sun.

---

## Why Pluto is Not a Planet

The official definition of a planet requires:
1. Must orbit the Sun
2. Must be large enough for gravity to pull it into a sphere
3. Must have cleared its orbit of other objects

Pluto has not cleared its orbit → classified as a dwarf planet

---

## Earth's Position - Why Life is Possible

Earth is in the habitable zone: The distance from the Sun where water can be liquid. Not too hot (like Venus) and not too cold (like Mars).

### Conditions that support life on Earth:
1. Right temperature for liquid water
2. Liquid water on the surface
3. Sunlight for energy
4. Oxygen for respiration (produced by plants)

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Sun | A star in our solar system |
| Terrestrial planet | Rocky planet close to the Sun |
| Gas giant | Large planet far from the Sun |
| Asteroid | Rocky object in the asteroid belt |
| Comet | Icy object with a tail |
| Dwarf planet | Small planet that hasn't cleared its orbit |
| Kuiper Belt | Region beyond Neptune with icy objects |
| Oort Cloud | Outer edge of the solar system |
| Gravity | Force keeping objects in orbit |
| Habitable zone | Distance from Sun where water is liquid |

### Worked Examples

**Example 1: Planet order**
Name the planets in order from the Sun.

**Solution:** Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. (Mnemonic: My Very Educated Mother Just Served Us Noodles)

**Example 2: Terrestrial vs Gas giants**
What is the main difference between terrestrial planets and gas giants?

**Solution:** Terrestrial planets are rocky, small, and dense with solid surfaces. Gas giants are large, low density, and have no solid surface.

**Example 3: Why life is possible on Earth**
Why can life exist on Earth but not on Mars?

**Solution:** Earth is in the habitable zone - the right distance from the Sun for liquid water to exist. Mars is too cold, so water is frozen. Earth also has oxygen and an atmosphere that protects life.
`,
          questions: [
            { id: 1, question: "What is the Sun?", options: ["A planet", "A star", "A moon", "An asteroid"], correct: 1 },
            { id: 2, question: "How does the Sun produce energy?", options: ["By burning", "By nuclear fusion", "By chemical reactions", "By friction"], correct: 1 },
            { id: 3, question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], correct: 2 },
            { id: 4, question: "Which planet is the 3rd from the Sun?", options: ["Mars", "Earth", "Venus", "Jupiter"], correct: 1 },
            { id: 5, question: "Which of the following is a gas giant?", options: ["Mars", "Earth", "Saturn", "Venus"], correct: 2 },
            { id: 6, question: "Which of the following is a terrestrial planet?", options: ["Jupiter", "Saturn", "Mars", "Uranus"], correct: 2 },
            { id: 7, question: "What keeps the planets in orbit around the Sun?", options: ["Magnetism", "Gravity", "Friction", "Nuclear fusion"], correct: 1 },
            { id: 8, question: "Where are most asteroids found?", options: ["Between Mercury and Venus", "Between Mars and Jupiter", "Beyond Neptune", "Around Earth"], correct: 1 },
            { id: 9, question: "What is a comet?", options: ["A rocky object", "An icy object that forms a tail near the Sun", "A type of planet", "A moon"], correct: 1 },
            { id: 10, question: "Why is Pluto no longer classified as a planet?", options: ["It is too small", "It has not cleared its orbit", "It does not orbit the Sun", "It is not round"], correct: 1 },
            { id: 11, question: "What is the habitable zone?", options: ["The region near the Sun", "The region where water can be liquid", "The region beyond Neptune", "The region with the most planets"], correct: 1 },
            { id: 12, question: "Which planet has the highest average temperature?", options: ["Mercury", "Venus", "Earth", "Mars"], correct: 1 },
            { id: 13, question: "Which of the following is NOT a condition for life on Earth?", options: ["Liquid water", "Oxygen", "Extreme temperatures", "Sunlight"], correct: 2 },
            { id: 14, question: "What are sunspots?", options: ["Hotter areas on the Sun", "Cooler areas on the Sun", "Planets near the Sun", "Asteroids near the Sun"], correct: 1 },
            { id: 15, question: "What is the Oort Cloud?", options: ["A region near the Sun", "The outer edge of the solar system with icy objects", "The asteroid belt", "A type of planet"], correct: 1 },
            { id: 16, question: "Which planet has rings?", options: ["Earth", "Mars", "Saturn", "Venus"], correct: 2 },
            { id: 17, question: "Which planet is known as the 'Red Planet'?", options: ["Venus", "Mars", "Jupiter", "Mercury"], correct: 1 },
            { id: 18, question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Uranus", "Neptune"], correct: 1 },
            { id: 19, question: "Which planet is closest to Earth?", options: ["Mars", "Venus", "Mercury", "Jupiter"], correct: 1 },
            { id: 20, question: "The force that keeps the Moon orbiting Earth is:", options: ["Magnetism", "Gravity", "Friction", "Nuclear fusion"], correct: 1 }
          ]
        },
        {
          id: "t4-w4-6",
          label: "Week 4-6",
          topic: "Beyond the Solar System",
          notes: `
## The Milky Way Galaxy

- Our Solar System is in the Milky Way Galaxy
- A galaxy is a collection of stars held together by gravity
- The Milky Way is a spiral galaxy (like a pinwheel)
- It has a central bulge and spiral arms
- Our Sun is located in the Orion Arm, about halfway out from the centre
- The Milky Way contains about 200 billion stars

From Earth, we see a hazy band of light across the sky:
- This is the Milky Way
- We are looking along the disk of the galaxy
- Ancient Greeks described it as "spilled milk"

---

## Our Nearest Star

- The nearest star to Earth is the Sun
- The nearest visible star to the Sun is Alpha Centauri
- Alpha Centauri is 4.2 light years away

---

## Light Years, Light Hours and Light Minutes

A light year is the distance light travels in one year.
- 1 light year ≈ 10 trillion km
- Alpha Centauri is 42 trillion km away

### Other units:
- Light hour = distance light travels in one hour
- Light minute = distance light travels in one minute

### Distance examples:
- Earth to Sun = 8 light minutes
- Solar System diameter ≈ 13 light hours

**Key point:** These are units of distance, not time!

---

## Beyond the Milky Way

- There are billions of galaxies in the Universe
- They come in different shapes:
  - Spiral galaxies (like the Milky Way)
  - Elliptical galaxies (round/oval)
  - Irregular galaxies (no clear shape)

### The Observable Universe:
- About 93 billion light years in diameter
- Contains billions of galaxies

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Galaxy | A collection of stars held together by gravity |
| Milky Way | Our home galaxy (spiral shape) |
| Light year | Distance light travels in one year |
| Light hour | Distance light travels in one hour |
| Light minute | Distance light travels in one minute |
| Spiral galaxy | Galaxy with spiral arms |
| Elliptical galaxy | Round/oval shaped galaxy |
| Irregular galaxy | Galaxy with no clear shape |
| Observable Universe | The part of the Universe we can see |

### Worked Examples

**Example 1: Galaxy types**
Name three types of galaxies and give an example of each.

**Solution:**
1. Spiral galaxy: The Milky Way
2. Elliptical galaxy: M89
3. Irregular galaxy: Large Magellanic Cloud

**Example 2: Light years**
If a star is 4.2 light years away, how long does its light take to reach Earth?

**Solution:** 4.2 years. The light travels for 4.2 years before reaching us.

**Example 3: Solar System diameter**
The solar system has a diameter of about 13 light hours. What does this tell us?

**Solution:** It would take light 13 hours to travel across the solar system. This is a measurement of distance, not time.
`,
          questions: [
            { id: 1, question: "What is a galaxy?", options: ["A collection of planets", "A collection of stars held together by gravity", "A single star system", "A type of planet"], correct: 1 },
            { id: 2, question: "What shape is the Milky Way Galaxy?", options: ["Elliptical", "Spiral", "Irregular", "Circular"], correct: 1 },
            { id: 3, question: "Where is our Solar System located in the Milky Way?", options: ["At the centre", "In the Orion Arm, halfway out", "Outside the galaxy", "At the edge"], correct: 1 },
            { id: 4, question: "How many stars are in the Milky Way Galaxy?", options: ["About 200 thousand", "About 200 million", "About 200 billion", "About 200 trillion"], correct: 2 },
            { id: 5, question: "What is a light year?", options: ["A unit of time", "A unit of distance", "A unit of speed", "A unit of mass"], correct: 1 },
            { id: 6, question: "How far is Alpha Centauri from Earth?", options: ["4.2 light minutes", "4.2 light hours", "4.2 light years", "42 light years"], correct: 2 },
            { id: 7, question: "How long does it take light from the Sun to reach Earth?", options: ["8 minutes", "8 hours", "8 days", "8 years"], correct: 0 },
            { id: 8, question: "The diameter of the Solar System is about:", options: ["8 light minutes", "13 light hours", "4.2 light years", "93 billion light years"], correct: 1 },
            { id: 9, question: "What is the observable Universe?", options: ["The part we can see", "The entire Universe", "Only our galaxy", "Only our solar system"], correct: 0 },
            { id: 10, question: "How many galaxies are there in the Universe?", options: ["Thousands", "Millions", "Billions", "Trillions"], correct: 2 },
            { id: 11, question: "Which is NOT a type of galaxy?", options: ["Spiral", "Elliptical", "Triangular", "Irregular"], correct: 2 },
            { id: 12, question: "What does the Milky Way band in the sky represent?", options: ["Looking at a distant galaxy", "Looking along the disk of our galaxy", "Looking at the centre of the Universe", "Looking through a cloud"], correct: 1 },
            { id: 13, question: "Alpha Centauri is the:", options: ["Nearest star to Earth", "Nearest visible star to the Sun", "Closest galaxy to the Milky Way", "Largest star in the Universe"], correct: 1 },
            { id: 14, question: "1 light year is approximately:", options: ["1 million km", "1 billion km", "10 trillion km", "100 trillion km"], correct: 2 },
            { id: 15, question: "What is the shape of an elliptical galaxy?", options: ["Round or oval", "Spiral", "Irregular", "Triangular"], correct: 0 },
            { id: 16, question: "The Large Magellanic Cloud is an example of a(n):", options: ["Spiral galaxy", "Elliptical galaxy", "Irregular galaxy", "Dwarf planet"], correct: 2 },
            { id: 17, question: "How long would it take light to travel across our Solar System?", options: ["8 minutes", "13 hours", "4.2 years", "93 billion years"], correct: 1 },
            { id: 18, question: "The ancient Greeks described the Milky Way as:", options: ["A river of stars", "Spilled milk", "A heavenly path", "A circle of light"], correct: 1 },
            { id: 19, question: "What holds a galaxy together?", options: ["Magnetism", "Gravity", "Friction", "Nuclear fusion"], correct: 1 },
            { id: 20, question: "The Universe contains billions of:", options: ["Planets", "Solar systems", "Galaxies", "Stars"], correct: 2 }
          ]
        },
        {
          id: "t4-w7-8",
          label: "Week 7-8",
          topic: "Looking into Space",
          notes: `
## Early Viewing of Space

- Ancient people studied the stars with the naked eye
- They grouped stars into constellations (patterns)
- Different cultures have different stories about constellations
- The Southern Cross (Crux) is used for navigation in the southern hemisphere

### Constellations:
- Orion
- Southern Cross (Crux)
- Pavo (the Peacock)
- Phoenix

---

## Telescopes

### Why use telescopes?
1. They collect more light than the eye → see fainter objects
2. They magnify images → see more detail
3. They have better resolution → see sharper images

### Two main types:

| Type | How it works | Advantages |
|------|--------------|------------|
| Refracting | Uses lenses | Simple design |
| Reflecting | Uses mirrors | No chromatic aberration, cheaper, easier to support |

---

## South African Telescopes

### SALT (Southern African Large Telescope):
- Located in Sutherland, Northern Cape
- Optical reflecting telescope
- Largest optical telescope in the southern hemisphere

### SKA (Square Kilometre Array):
- Radio telescope
- Mainly in South Africa and Australia
- Will have thousands of dishes

### Why South Africa?
- Clear skies and dry climate
- High altitude
- Low light pollution
- Good radio silence for SKA

---

## Space Telescopes

### Hubble Space Telescope:
- Optical telescope in space
- No atmospheric distortion
- Clearer images than Earth-based telescopes

### Why put telescopes in space?
- No atmosphere to block light
- No atmospheric distortion
- Can detect X-rays and other radiation that is absorbed by Earth's atmosphere

---

## Quick Summary: Key Terms

| Term | Definition |
|------|------------|
| Constellation | A group of stars forming a pattern |
| Southern Cross | Constellations used for navigation |
| Refracting telescope | Uses lenses to collect light |
| Reflecting telescope | Uses mirrors to collect light |
| SALT | Southern African Large Telescope |
| SKA | Square Kilometre Array |
| Hubble | Space telescope in orbit |

### Worked Examples

**Example 1: Telescopes**
What is the advantage of a reflecting telescope over a refracting telescope?

**Solution:**
- Reflecting telescopes use mirrors which are cheaper to make
- Mirrors can be supported across the back so they don't sag
- No chromatic aberration (colour separation)
- Larger mirrors can be made than lenses

**Example 2: South African telescopes**
Why is South Africa a good place for telescopes?

**Solution:**
- Clear, dry skies (fewer clouds)
- High altitude (thinner atmosphere)
- Far from cities (less light pollution)
- Good radio silence (for SKA)
`,
          questions: [
            { id: 1, question: "What is a constellation?", options: ["A single star", "A group of stars forming a pattern", "A type of galaxy", "A planet"], correct: 1 },
            { id: 2, question: "The Southern Cross is used for:", options: ["Timekeeping", "Navigation", "Religious ceremonies", "Weather prediction"], correct: 1 },
            { id: 3, question: "What is the main purpose of a telescope?", options: ["To magnify objects", "To collect more light", "To see through clouds", "To measure temperature"], correct: 1 },
            { id: 4, question: "What type of telescope uses lenses?", options: ["Refracting", "Reflecting", "Radio", "Space"], correct: 0 },
            { id: 5, question: "What type of telescope uses mirrors?", options: ["Refracting", "Reflecting", "Radio", "Space"], correct: 1 },
            { id: 6, question: "What does SALT stand for?", options: ["Southern African Large Telescope", "South African Light Telescope", "Southern American Light Telescope", "South African Large Technology"], correct: 0 },
            { id: 7, question: "Where is SALT located?", options: ["Cape Town", "Sutherland", "Johannesburg", "Durban"], correct: 1 },
            { id: 8, question: "What does SKA stand for?", options: ["South African Kilometre Array", "Square Kilometre Array", "Southern Kilometre Array", "Square African Array"], correct: 1 },
            { id: 9, question: "What type of radiation does SKA detect?", options: ["Visible light", "Radio waves", "X-rays", "Gamma rays"], correct: 1 },
            { id: 10, question: "Why are telescopes placed in space?", options: ["To be closer to stars", "To avoid atmospheric distortion", "To save money", "To see during the day"], correct: 1 },
            { id: 11, question: "The Hubble Space Telescope is:", options: ["On the Moon", "In Earth orbit", "On Mars", "On the ground"], correct: 1 },
            { id: 12, question: "Why is South Africa a good place for optical telescopes?", options: ["It has many clouds", "It has clear skies and low light pollution", "It is near the equator", "It has many mountains"], correct: 1 },
            { id: 13, question: "Reflecting telescopes use:", options: ["Lenses only", "Mirrors only", "Both lenses and mirrors", "Neither"], correct: 1 },
            { id: 14, question: "Refracting telescopes suffer from:", options: ["Chromatic aberration", "Mirror sag", "Radio interference", "Cloud cover"], correct: 0 },
            { id: 15, question: "The Southern Cross is also called:", options: ["Orion", "Crux", "Pavo", "Phoenix"], correct: 1 },
            { id: 16, question: "Radio telescopes:", options: ["Can be used in cloudy weather", "Can only be used at night", "Need clear skies", "Cannot detect stars"], correct: 0 },
            { id: 17, question: "X-ray telescopes must be placed in space because:", options: ["X-rays are invisible", "X-rays are absorbed by the atmosphere", "X-rays are too bright", "X-rays don't travel through space"], correct: 1 },
            { id: 18, question: "The SKA will have:", options: ["64 dishes", "3000 dishes", "One large dish", "No dishes"], correct: 1 },
            { id: 19, question: "Ancient people studied the stars using:", options: ["Telescopes", "The naked eye", "Satellites", "Radio telescopes"], correct: 1 },
            { id: 20, question: "One advantage of reflecting telescopes is:", options: ["They are cheaper to make large mirrors", "They use lenses", "They are smaller", "They don't need to be cleaned"], correct: 0 }
          ]
        }
      ]
    }
  }
};