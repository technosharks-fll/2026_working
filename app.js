const regions = {
  "Pacific Northwest": {
    species: [
      { name: "Southern Resident orca", latin: "Orcinus orca", status: "Endangered", risk: 1, icon: "◉", art: "whale", range: "Puget Sound & Salish Sea", summary: "A distinct population of fish-eating orcas. Their health is closely linked to the availability of Chinook salmon and a healthy marine habitat.", role: "As top predators, orcas reflect the health of the food web and can influence how energy moves through marine ecosystems.", source: "NOAA Fisheries; U.S. Endangered Species Act listing. Status shown is for the Southern Resident population." },
      { name: "Wolverine", latin: "Gulo gulo luscus", status: "Threatened", risk: 2, icon: "✦", art: "bear", range: "Cascade & Rocky Mountains", summary: "A wide-ranging mountain carnivore that depends on connected, cold, snowy landscapes.", role: "Wolverines are scavengers and predators that move nutrients through remote mountain habitats.", source: "U.S. Fish and Wildlife Service; U.S. Endangered Species Act listing." },
      { name: "Sea otter", latin: "Enhydra lutris", status: "Threatened", risk: 3, icon: "≈", art: "whale", range: "Washington's outer coast", summary: "A marine mammal that forages among nearshore kelp forests and rocky reefs.", role: "By eating sea urchins, sea otters can help limit intense grazing pressure on kelp forests.", source: "U.S. Fish and Wildlife Service; consult the agency for population-specific status." },
      { name: "Marbled murrelet", latin: "Brachyramphus marmoratus", status: "Threatened", risk: 4, icon: "⌁", art: "owl", range: "Coastal old-growth forests", summary: "A small seabird that nests high in mature coastal trees and feeds at sea.", role: "Its life connects coastal forests with marine food webs, making it a signal of change across both habitats.", source: "U.S. Fish and Wildlife Service; U.S. Endangered Species Act listing." }
    ],
    plants: [
      { name: "Oregon grape", latin: "Mahonia aquifolium", icon: "✺", sun: "Part shade to sun", water: "Low once established", season: "Plant in fall or spring", summary: "An evergreen shrub with bright spring flowers and berries that feed birds and other wildlife.", care: "Give it well-drained soil; water while young. Berries are tart—do not eat unless positively identified." },
      { name: "Sword fern", latin: "Polystichum munitum", icon: "❋", sun: "Shade to part shade", water: "Regular while young", season: "Plant in fall or spring", summary: "A familiar forest-floor fern that provides year-round cover in shady gardens.", care: "Mimic a woodland floor with leaf litter and moist, well-drained soil." },
      { name: "Red-flowering currant", latin: "Ribes sanguineum", icon: "✿", sun: "Sun to part shade", water: "Low once established", season: "Plant in fall or early spring", summary: "An early-blooming shrub whose flowers are a welcome nectar source for hummingbirds.", care: "Choose a spot with good drainage; water regularly during its first summer." },
      { name: "Western redcedar", latin: "Thuja plicata", icon: "♧", sun: "Sun to part shade", water: "Moist soil when young", season: "Plant in fall or spring", summary: "A large native evergreen that creates habitat and shelter in moist coastal landscapes.", care: "Allow plenty of space and check mature size before planting near buildings." }
    ]
  },
  "Northeast": {
    species: [
      { name: "North Atlantic right whale", latin: "Eubalaena glacialis", status: "Critically endangered", risk: 1, icon: "◉", art: "whale", range: "Atlantic coast", summary: "A migratory whale facing risks from vessel strikes, entanglement, and a changing ocean.", role: "As a large marine mammal, it is part of the ocean's nutrient cycle and a sentinel for coastal ecosystem health.", source: "NOAA Fisheries; U.S. Endangered Species Act listing." },
      { name: "Canada lynx", latin: "Lynx canadensis", status: "Threatened", risk: 2, icon: "✦", art: "wolf", range: "Northern forest regions", summary: "A forest-dwelling cat whose survival is closely tied to deep snow and healthy boreal habitat.", role: "As a specialized predator, lynx are part of the balance of northern forest food webs.", source: "U.S. Fish and Wildlife Service; U.S. Endangered Species Act listing." },
      { name: "Atlantic sturgeon", latin: "Acipenser oxyrinchus", status: "Endangered", risk: 3, icon: "≈", art: "whale", range: "Atlantic rivers & estuaries", summary: "An ancient, migratory fish that travels between coastal waters and rivers to spawn.", role: "Its migrations connect freshwater, estuary, and marine habitats.", source: "NOAA Fisheries; status varies by distinct population segment." },
      { name: "Moose", latin: "Alces alces", status: "Regionally vulnerable", risk: 4, icon: "♧", art: "bear", range: "Northern New England", summary: "A large browser of wetlands and forests whose populations are affected by habitat and climate pressures.", role: "As a major browser, moose influence vegetation and provide food for other species.", source: "Regional wildlife agencies; status varies by state and population." }
    ],
    plants: [
      { name: "Purple coneflower", latin: "Echinacea purpurea", icon: "✿", sun: "Full sun", water: "Moderate; drought tolerant", season: "Plant in spring or fall", summary: "A long-blooming perennial that offers nectar to pollinators and seeds to birds.", care: "Use well-drained soil and leave seed heads standing through winter." },
      { name: "Wild bergamot", latin: "Monarda fistulosa", icon: "✺", sun: "Sun to part shade", water: "Moderate", season: "Plant in spring or fall", summary: "A fragrant native wildflower popular with bees, butterflies, and hummingbirds.", care: "Give it good airflow and avoid overly rich, wet soil." },
      { name: "New England aster", latin: "Symphyotrichum novae-angliae", icon: "❋", sun: "Full sun", water: "Moist to average", season: "Plant in spring", summary: "A fall-blooming native perennial that supports late-season pollinators.", care: "Water during dry spells and cut back after flowering if desired." },
      { name: "Serviceberry", latin: "Amelanchier canadensis", icon: "♧", sun: "Sun to part shade", water: "Moderate", season: "Plant in spring or fall", summary: "A small native tree with spring flowers and fruits eaten by birds and mammals.", care: "Select a site with room to grow and keep soil consistently moist while young." }
    ]
  },
  "California": {
    species: [
      { name: "Southern Resident orca", latin: "Orcinus orca", status: "Endangered", risk: 1, icon: "◉", art: "whale", range: "Northern California to Salish Sea", summary: "A distinct fish-eating orca population whose survival depends on a healthy ocean and plentiful salmon.", role: "As a top predator, orcas reflect the health of the marine food web.", source: "NOAA Fisheries; status is for the Southern Resident population." },
      { name: "California condor", latin: "Gymnogyps californianus", status: "Critically endangered", risk: 2, icon: "⌁", art: "owl", range: "Central & Southern California", summary: "A remarkable scavenger recovering with intensive conservation support.", role: "As a scavenger, condors help recycle nutrients and clean up carrion.", source: "U.S. Fish and Wildlife Service; U.S. Endangered Species Act listing." },
      { name: "Sea otter", latin: "Enhydra lutris", status: "Threatened", risk: 3, icon: "≈", art: "whale", range: "California nearshore waters", summary: "A marine mammal that forages in kelp forests and rocky coastal habitats.", role: "By eating sea urchins, sea otters can help limit grazing pressure on kelp.", source: "U.S. Fish and Wildlife Service; status can vary by population." },
      { name: "Gray wolf", latin: "Canis lupus", status: "Protected; status varies", risk: 4, icon: "✦", art: "wolf", range: "Northern California", summary: "A recovering large carnivore returning to parts of its historic range.", role: "Predators can influence prey behavior and ecosystem processes; effects depend on local conditions.", source: "California Department of Fish and Wildlife; protections vary by jurisdiction." }
    ],
    plants: [
      { name: "California poppy", latin: "Eschscholzia californica", icon: "✿", sun: "Full sun", water: "Low once established", season: "Sow in fall or early spring", summary: "A bright annual wildflower adapted to dry summers and seasonal rain.", care: "Direct sow in a sunny spot; avoid overwatering and check local guidance." },
      { name: "Coyote brush", latin: "Baccharis pilularis", icon: "❋", sun: "Sun to part shade", water: "Low once established", season: "Plant in fall or spring", summary: "A hardy shrub that provides cover and flowers for pollinators.", care: "Choose a well-drained site; prune lightly to maintain shape." },
      { name: "Yarrow", latin: "Achillea millefolium", icon: "✺", sun: "Full sun", water: "Low to moderate", season: "Plant in fall or spring", summary: "A resilient flowering perennial that attracts beneficial insects.", care: "Use well-drained soil and give spreading plants room." },
      { name: "Coast live oak", latin: "Quercus agrifolia", icon: "♧", sun: "Full sun", water: "Low once established", season: "Plant in fall", summary: "A long-lived native tree that supports an abundant community of wildlife.", care: "Plant away from structures and avoid summer watering once established." }
    ]
  },
  "Midwest": {
    species: [
      { name: "Whooping crane", latin: "Grus americana", status: "Endangered", risk: 1, icon: "⌁", art: "owl", range: "Great Lakes & migratory wetlands", summary: "A rare migratory bird dependent on wetlands and safe stopover sites.", role: "Its reliance on connected wetland landscapes highlights the value of habitat conservation.", source: "U.S. Fish and Wildlife Service; U.S. Endangered Species Act listing." },
      { name: "Gray wolf", latin: "Canis lupus", status: "Protected; status varies", risk: 2, icon: "✦", art: "wolf", range: "Northern Great Lakes", summary: "A large carnivore present in some northern Midwest landscapes.", role: "Predators can affect prey and food webs; local effects depend on ecosystem conditions.", source: "U.S. Fish and Wildlife Service; protections vary by location." },
      { name: "Monarch butterfly", latin: "Danaus plexippus", status: "Candidate for listing", risk: 3, icon: "✿", art: "owl", range: "Prairies & migration corridors", summary: "A migratory butterfly whose lifecycle depends on milkweed and flowering habitat.", role: "Monarchs are pollinators and a visible indicator of grassland and prairie habitat.", source: "U.S. Fish and Wildlife Service; check current federal and local status." },
      { name: "Lake sturgeon", latin: "Acipenser fulvescens", status: "Regionally vulnerable", risk: 4, icon: "≈", art: "whale", range: "Great Lakes & connected rivers", summary: "A long-lived freshwater fish that depends on clean rivers and spawning habitat.", role: "Its migrations connect lake and river ecosystems.", source: "Regional fisheries agencies; status varies by state and watershed." }
    ],
    plants: [
      { name: "Purple coneflower", latin: "Echinacea purpurea", icon: "✿", sun: "Full sun", water: "Moderate; drought tolerant", season: "Plant in spring or fall", summary: "A prairie perennial that offers nectar to pollinators and seeds to birds.", care: "Use well-drained soil and leave seed heads standing through winter." },
      { name: "Common milkweed", latin: "Asclepias syriaca", icon: "❋", sun: "Full sun", water: "Low to moderate", season: "Sow in fall or plant in spring", summary: "A prairie native and host plant for monarch caterpillars.", care: "Allow room to spread and use locally appropriate seed." },
      { name: "Little bluestem", latin: "Schizachyrium scoparium", icon: "♧", sun: "Full sun", water: "Low once established", season: "Plant in spring", summary: "A warm-season native grass that provides cover and winter interest.", care: "Choose a sunny, well-drained spot; cut back in early spring." },
      { name: "Wild bergamot", latin: "Monarda fistulosa", icon: "✺", sun: "Sun to part shade", water: "Moderate", season: "Plant in spring or fall", summary: "A fragrant wildflower visited by bees, butterflies, and hummingbirds.", care: "Give it good airflow and avoid overly wet soil." }
    ]
  }
};

const seasonalWeather = {
  "Mahonia aquifolium": "Fall or spring planting is usually gentler than summer heat. Once established, it tolerates the region's dry summer; young plants need water during warm dry spells.",
  "Polystichum munitum": "Best in cool shade and evenly moist soil. Protect from hot afternoon sun and summer drying; avoid standing water in winter.",
  "Ribes sanguineum": "Plant during cool fall or early spring weather. Flowering starts in spring; give new plants water through their first dry summer.",
  "Thuja plicata": "Plant in cool, moist weather with room for roots. Young trees need summer water; avoid drought stress and waterlogged winter soil.",
  "Echinacea purpurea": "Plant in mild spring or fall weather. It flowers in summer, prefers sun and drained soil, and tolerates dry spells once established.",
  "Monarda fistulosa": "Establish in spring or fall. It flowers in warm summer weather; water during prolonged drought and avoid persistently wet winter soil.",
  "Symphyotrichum novae-angliae": "Plant in spring after hard frost or in early fall. It flowers in late summer or fall; keep soil moist during summer dry spells.",
  "Amelanchier canadensis": "Plant in cool spring or fall weather. Keep roots moist through summer while young; protect from prolonged drought and heat.",
  "Eschscholzia californica": "Sow with the cool-season rains in fall or early spring. It flowers in spring; established plants generally rest through hot, dry summer weather.",
  "Baccharis pilularis": "Plant in the cool, wetter season. It tolerates dry summers once established; water new plants during their first warm season.",
  "Achillea millefolium": "Plant in mild spring or fall conditions. It handles sunny, dry summers once established; avoid soggy winter soil.",
  "Quercus agrifolia": "Fall planting lets roots establish during cooler weather. Young trees need careful establishment watering; avoid frequent summer irrigation once established.",
  "Asclepias syriaca": "Sow outdoors in fall for natural winter chilling, or plant in spring. It grows in warm summers and dies back naturally during winter dormancy.",
  "Schizachyrium scoparium": "Plant in spring after the last hard frost. This warm-season grass grows in summer, tolerates dry weather once established, and goes dormant in winter."
};

const quizQuestions = [
  {
    topic: "ECOSYSTEMS", question: "Why are keystone species important?",
    options: ["They are always the most numerous species.", "They have a particularly strong effect on the ecosystem around them.", "They only live in protected areas."],
    answer: 1, explanation: "That's right! Keystone species can have an outsized influence on the ecosystem around them."
  },
  {
    topic: "WILDLIFE SAFETY", question: "What should you do if an animal changes its behavior while you observe it?",
    options: ["Move closer for a better photo.", "Offer food so it stays nearby.", "Back away calmly and give it more space."],
    answer: 2, explanation: "Correct. An animal changing its behavior is a sign to give it more space."
  },
  {
    topic: "NATIVE PLANTS", question: "What is a good starting point for choosing native seeds?",
    options: ["Choose any seed mix labeled 'wildflower'.", "Collect seeds from any wild plant you find.", "Find locally appropriate seed from a reputable regional source."],
    answer: 2, explanation: "Right. Regional, responsibly sourced native seeds are more likely to suit local conditions."
  },
  {
    topic: "RESPONSIBLE SIGHTINGS", question: "What location detail should you leave out of a public wildlife sighting?",
    options: ["The broad town or region.", "Exact coordinates of a nest, den, or sensitive species.", "The date you made the observation."],
    answer: 1, explanation: "Exactly. Keep sensitive wildlife locations private to avoid disturbing the animals."
  },
  {
    topic: "SEED STEWARDSHIP", question: "What should you check before planting a donated seed packet?",
    options: ["That the species is identified and suitable for your region.", "Only the packet color.", "Whether it has the most seeds."],
    answer: 0, explanation: "Correct. Confirm plant identity, regional suitability, and responsible sourcing before planting."
  }
];

const STORAGE_KEYS = {
  reports: "rooted-reports-v1",
  progress: "rooted-progress-v1",
  guide: "rooted-guide-v1",
  community: "rooted-community-v1",
  seedOffers: "rooted-seed-offers-v1",
  location: "rooted-location-v1"
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const savedLocation = safeRead(STORAGE_KEYS.location, {});
let currentRegion = regions[savedLocation.region] ? savedLocation.region : "Pacific Northwest";
let currentCity = typeof savedLocation.city === "string" ? savedLocation.city : "";
let toastTimer;
let photoUrl = null;
let selectedAnswer = null;
let isQuestionAnswered = false;
let editingEntryId = null;
let editingEntryKind = null;

function safeRead(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Unable to read ${key} from local storage.`, error);
    return fallback;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Unable to save ${key} to local storage.`, error);
    showToast("Could not save this on your device. Check your browser storage settings.");
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function renderSpeciesCard(species) {
  return `
    <article class="species-card">
      <div class="species-art art-${species.art}" aria-hidden="true">${renderImage(species.image, species.name)}<span class="animal-mark">${species.icon}</span></div>
      <div class="species-card-content">
        <div class="species-card-title"><h3>${escapeHtml(species.name)}</h3><span class="status-chip ${species.risk <= 2 ? "high" : ""}">${escapeHtml(species.status)}</span></div>
        <p class="latin-name">${escapeHtml(species.latin)}</p>
        <div class="species-card-bottom"><span>${escapeHtml(species.range)}</span><button type="button" data-species="${escapeHtml(species.name)}">Learn more →</button></div>
      </div>
    </article>`;
}

function renderSpeciesRow(species, index) {
  const speciesId = escapeHtml(species.id);
  return `
    <article class="species-row">
      <div class="species-art art-${species.art}" aria-hidden="true">${renderImage(species.image, species.name)}<span class="animal-mark">${species.icon}</span></div>
      <div class="species-row-content">
        <h2>${index + 1}. ${escapeHtml(species.name)}</h2>
        <p class="latin-name">${escapeHtml(species.latin)}</p>
        <p>${escapeHtml(species.summary)}</p>
      </div>
      <div class="species-row-side"><span class="status-chip ${species.risk <= 2 ? "high" : ""}">${escapeHtml(species.status)}</span><button class="text-link species-detail-toggle" type="button" aria-expanded="false">Details & population +</button><button class="entry-edit" data-edit-kind="species" data-entry-id="${speciesId}">Edit</button><button class="entry-delete" data-delete-kind="species" data-entry-id="${speciesId}">Delete</button></div>
      <div class="species-row-details" hidden><p><strong>Why it matters:</strong> ${escapeHtml(species.role)}<br><strong>Range:</strong> ${escapeHtml(species.range)}<br><strong>Population information:</strong> ${escapeHtml(species.population || "No local population estimate added. Check the linked agency source for current survey data.")}<br><strong>Source note:</strong> ${escapeHtml(species.source)}</p></div>
    </article>`;
}

function renderPlantPreview(plant) {
  return `<div class="plant-preview"><span class="plant-swatch" aria-hidden="true">${renderImage(plant.image, plant.name)}<span>${plant.icon}</span></span><div><h3>${escapeHtml(plant.name)}</h3><p>${escapeHtml(plant.sun)} · ${escapeHtml(plant.season)}</p></div></div>`;
}

function renderPlantCard(plant) {
  return `
    <article class="plant-card">
      <div class="plant-card-head"><span class="plant-swatch" aria-hidden="true">${renderImage(plant.image, plant.name)}<span>${plant.icon}</span></span><div><h2>${escapeHtml(plant.name)}</h2><p class="latin-name">${escapeHtml(plant.latin)}</p></div></div>
      <p class="plant-summary">${escapeHtml(plant.summary)}</p>
      <div class="plant-meta"><div><strong>Light</strong>${escapeHtml(plant.sun)}</div><div><strong>Water</strong>${escapeHtml(plant.water)}</div></div>
      <p class="plant-care"><strong>When to plant:</strong> ${escapeHtml(plant.season)}<br><strong>Care tip:</strong> ${escapeHtml(plant.care)}</p>
      <p class="plant-weather"><strong>Seasonal weather:</strong> ${escapeHtml(plant.weather || "Check local native-plant guidance for seasonal planting and weather needs.")}</p>
      <p class="plant-population"><strong>Local population / status:</strong> ${escapeHtml(plant.population || "No local abundance survey added; consult local native-plant monitoring data.")}</p>
      <div class="entry-actions"><button class="entry-edit" data-edit-kind="plants" data-entry-id="${escapeHtml(plant.id)}">Edit</button><button class="entry-delete" data-delete-kind="plants" data-entry-id="${escapeHtml(plant.id)}">Delete</button></div>
    </article>`;
}

function renderImage(image, alt) {
  if (!image || (!/^https:\/\//i.test(image) && !/^data:image\/(?:jpeg|png|webp);base64,/i.test(image))) return "";
  return `<img class="species-photo" src="${escapeHtml(image)}" alt="${escapeHtml(alt)}" loading="lazy" referrerpolicy="no-referrer" />`;
}

function getGuideData() {
  const saved = safeRead(STORAGE_KEYS.guide, {});
  const defaults = regions[currentRegion];
  const savedRegion = saved[currentRegion] || {};
  return {
    species: Array.isArray(savedRegion.species) ? savedRegion.species : defaults.species.map((entry, index) => ({ ...entry, id: `species-${index + 1}`, population: entry.population || "Population estimates depend on survey year and population. See agency source for current monitoring." })),
    plants: (Array.isArray(savedRegion.plants) ? savedRegion.plants : defaults.plants.map((entry, index) => ({ ...entry, id: `plant-${index + 1}`, population: entry.population || "Local abundance has not been surveyed in this demo." })))
      .map((entry) => ({ ...entry, weather: entry.weather || seasonalWeather[entry.latin] || "Check local native-plant guidance for seasonal planting and weather needs." }))
  };
}

function saveGuideData(data) {
  const saved = safeRead(STORAGE_KEYS.guide, {});
  saved[currentRegion] = data;
  return safeWrite(STORAGE_KEYS.guide, saved);
}

function renderReports() {
  const storedReports = safeRead(STORAGE_KEYS.reports, []);
  const reports = Array.isArray(storedReports) ? storedReports.map((report) => ({
    ...report,
    id: report.id || crypto.randomUUID(),
    severity: report.severity || "moderate",
    city: report.city || "",
    reviewedByHuman: report.reviewedByHuman === true
  })) : [];
  if (Array.isArray(storedReports) && reports.some((report, index) => report.id !== storedReports[index]?.id || report.severity !== storedReports[index]?.severity)) {
    safeWrite(STORAGE_KEYS.reports, reports);
  }
  const count = reports.length;
  $("#report-nav-count").textContent = String(count);
  $("#report-total").textContent = String(count);
  const insight = count === 0
    ? "A single report is a note, not a confirmed trend. More observations can help point people toward questions to investigate."
    : `${count} unverified ${count === 1 ? "observation has" : "observations have"} been recorded on this device. This is not enough to establish a trend or confirm an incident.`;
  $("#report-insight").textContent = insight;
  $("#community-title").textContent = count ? `${count} ${count === 1 ? "note" : "notes"} shared from this device.` : "Every observation matters.";
  $("#community-copy").textContent = count
    ? "Reports are unverified community notes. Use them to guide questions, never as proof of a trend."
    : "Share a careful field report to help your community notice changes in local habitats.";
  $("#report-history").innerHTML = count ? reports.slice().reverse().map((report) => `
    <article class="report-item">
      <div class="report-item-head"><h3>${escapeHtml(report.species)}</h3><time datetime="${escapeHtml(report.createdAt)}">${new Date(report.createdAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}</time></div>
      <div class="report-item-type"><span class="severity-chip severity-${escapeHtml(report.severity || "low")}">${escapeHtml((report.severity || "low").toUpperCase())}</span> ${escapeHtml(report.type)}${report.city ? ` · ${escapeHtml(report.city)}` : ""}</div>
      <p>${escapeHtml(report.details)}</p>
    </article>`).join("") : '<div class="empty-state">Your field notes will appear here after you submit a report.</div>';
  renderReportQueue(reports);
}

function reportSignals(report, reports) {
  const signals = [];
  const normalized = String(report.details || "").trim().toLowerCase().replace(/\s+/g, " ");
  if (normalized.length < 24) signals.push("very little detail");
  if (/https?:\/\/|www\./i.test(report.details || "")) signals.push("contains an external link");
  if (/(.)\1{7,}/i.test(report.details || "")) signals.push("repeated characters");
  if (reports.some((other) => other.id !== report.id
    && other.species === report.species
    && other.type === report.type
    && String(other.details || "").trim().toLowerCase().replace(/\s+/g, " ") === normalized)) {
    signals.push("possible duplicate");
  }
  return signals;
}

function renderReportQueue(reports) {
  const queue = reports.filter((report) => !report.reviewedByHuman)
    .map((report) => ({ report, signals: reportSignals(report, reports) }))
    .sort((a, b) => severityRank(b.report.severity) - severityRank(a.report.severity));
  $("#report-review-queue").innerHTML = queue.length ? queue.map(({ report, signals }) => `
    <article class="report-item">
      <div class="report-item-head"><h3>${escapeHtml(report.species)} · ${escapeHtml(report.city || "Town not shared")}</h3><span class="severity-chip severity-${escapeHtml(report.severity || "low")}">${escapeHtml((report.severity || "low").toUpperCase())} PRIORITY</span></div>
      <div class="report-item-type">${escapeHtml(report.type)}</div>
      <p>${escapeHtml(report.details)}</p>
      <p class="review-signals"><strong>Automated review signals:</strong> ${signals.length ? escapeHtml(signals.join(", ")) : "No simple spam or duplicate pattern detected."} This does not confirm whether the report is true.</p>
      <button class="button button-outline review-report" data-report-id="${escapeHtml(report.id)}">Mark reviewed by me</button>
    </article>`).join("") : '<div class="empty-state">No reports awaiting a human review.</div>';
}

function severityRank(severity) {
  return ({ low: 1, moderate: 2, high: 3, critical: 4 })[severity] || 0;
}

function getProgress() {
  const stored = safeRead(STORAGE_KEYS.progress, {});
  const legacyCompleted = stored?.quizCompleted === true;
  return {
    points: Number.isFinite(stored?.points) && stored.points >= 0 ? stored.points : 0,
    quizCount: Number.isInteger(stored?.quizCount) && stored.quizCount >= 0 ? stored.quizCount : (legacyCompleted ? 1 : 0),
    quizCompleted: legacyCompleted,
    seedRedeemed: stored?.seedRedeemed === true
  };
}

function getPoints() {
  return getProgress().points;
}

function renderPoints() {
  const points = getPoints();
  $("#points-display").textContent = String(points);
  $("#sidebar-points").textContent = String(points);
  $("#quiz-points").textContent = String(points);
  $("#points-progress-fill").style.width = `${Math.min(points % 100, 100)}%`;
  $("#points-next").textContent = points ? `${100 - (points % 100 || 100)} points to your next learning milestone.` : "Answer a quiz to earn your first 20 points.";
  $("#seed-points").textContent = String(points);
  const levels = [
    { min: 0, name: "Nature Newcomer", copy: "Every bit of learning helps a habitat grow." },
    { min: 100, name: "Habitat Explorer", copy: "You are finding new ways to support local nature." },
    { min: 300, name: "Native Gardener", copy: "Your knowledge is putting down roots." },
    { min: 600, name: "Wildlife Steward", copy: "You are helping your community care for wildlife." },
    { min: 1000, name: "Ecosystem Champion", copy: "Your commitment helps the whole community thrive." }
  ];
  const level = levels.slice().reverse().find((item) => points >= item.min) || levels[0];
  const nextLevel = levels.find((item) => item.min > points);
  $("#level-name").textContent = level.name;
  $("#level-copy").textContent = level.copy;
  $("#level-progress").style.width = nextLevel ? `${((points - level.min) / (nextLevel.min - level.min)) * 100}%` : "100%";
  $("#level-next").textContent = nextLevel ? `${nextLevel.min - points} points to ${nextLevel.name}` : "Highest level reached.";
}

function renderRegion() {
  const data = getGuideData();
  $("#location-label").textContent = currentCity ? `${currentCity} · ${currentRegion}` : currentRegion;
  $("#overview-species").innerHTML = data.species.slice().sort((a, b) => a.risk - b.risk).slice(0, 3).map(renderSpeciesCard).join("");
  $("#wildlife-list").innerHTML = data.species.slice().sort((a, b) => a.risk - b.risk).map(renderSpeciesRow).join("");
  $("#overview-plants").innerHTML = data.plants.slice(0, 3).map(renderPlantPreview).join("");
  $("#plant-list").innerHTML = data.plants.map(renderPlantCard).join("");
  $("#report-species").innerHTML = `<option value="">Choose a species or habitat</option>${data.species.map((species) => `<option>${escapeHtml(species.name)}</option>`).join("")}<option>Local habitat (species unknown)</option><option>Invasive plant (species unknown)</option>`;
  const communityOptions = [...data.species.map((species) => species.name), ...data.plants.map((plant) => plant.name), "Local habitat", "Other"];
  $("#community-subject").innerHTML = `<option value="">Choose a species or topic</option>${communityOptions.map((item) => `<option>${escapeHtml(item)}</option>`).join("")}`;
  renderCommunity();
  renderSeedExchange();
}

function renderCommunity() {
  const entries = safeRead(STORAGE_KEYS.community, []);
  const data = Array.isArray(entries) ? entries : [];
  const renderEntry = (entry) => `
    <article class="community-post">
      <div class="community-post-heading"><span class="post-kind">${escapeHtml(entry.kind === "question" ? "QUESTION" : "SIGHTING")}</span><span>${escapeHtml(entry.city || "Town not shared")}</span></div>
      <h3>${escapeHtml(entry.subject)}</h3><time datetime="${escapeHtml(entry.createdAt)}">${new Date(entry.createdAt).toLocaleDateString()}</time>
      <p>${escapeHtml(entry.text)}</p>
      <small>Unverified community note · Keep wildlife distance and sensitive locations private.</small>
    </article>`;
  const allPosts = data.slice().reverse();
  $("#community-feed").innerHTML = allPosts.length ? allPosts.map(renderEntry).join("") : '<div class="empty-state">No community sightings or questions yet. Be the first to share a careful field note.</div>';
  const currentGuide = getGuideData();
  const speciesNames = new Set(currentGuide.species.map((species) => species.name));
  const plantNames = new Set(currentGuide.plants.map((plant) => plant.name));
  const relatedSpecies = allPosts.filter((entry) => entry.kind === "question" || speciesNames.has(entry.subject));
  const relatedPlants = allPosts.filter((entry) => entry.kind === "question" || plantNames.has(entry.subject));
  $("#species-community-feed").innerHTML = relatedSpecies.length ? relatedSpecies.slice(0, 3).map(renderEntry).join("") : '<div class="empty-state">No local wildlife sightings or questions yet.</div>';
  $("#plant-community-feed").innerHTML = relatedPlants.length ? relatedPlants.slice(0, 3).map(renderEntry).join("") : '<div class="empty-state">No local plant sightings or questions yet.</div>';
}

function renderSeedExchange() {
  const town = currentCity || currentRegion;
  $("#seed-location-title").textContent = `Community seed shelves near ${town}`;
  const samplePoints = [
    { name: `${town} Community Garden`, description: "Example community seed shelf", distance: "Contact host to confirm" },
    { name: `${town} Public Library`, description: "Example seed-library pickup", distance: "Hours and stock unverified" },
    { name: `${currentRegion} Native Plant Network`, description: "Example local native-plant organizer", distance: "Availability unverified" }
  ];
  $("#pickup-list").innerHTML = samplePoints.map((point) => `
    <article class="pickup-card"><span class="pickup-icon">♧</span><h3>${escapeHtml(point.name)}</h3><p>${escapeHtml(point.description)}</p><span>${escapeHtml(point.distance)}</span><small>DEMO LISTING · VERIFY WITH HOST</small></article>`).join("");
  const redeemed = getProgress().seedRedeemed;
  $("#redeem-seeds").disabled = redeemed || getPoints() < 100;
  $("#redeem-seeds").textContent = redeemed ? "Demo redemption used" : getPoints() < 100 ? "Earn 100 points to redeem" : "Redeem 100 points";
  const offers = safeRead(STORAGE_KEYS.seedOffers, []);
  $("#seed-offers").innerHTML = Array.isArray(offers) && offers.length ? offers.slice().reverse().map((offer) => `
    <article class="pickup-card"><span class="pickup-icon">✿</span><h3>${escapeHtml(offer.offer)}</h3><p>${escapeHtml(offer.city)} · Pickup: ${escapeHtml(offer.pickup)}</p><span>${escapeHtml(offer.quantity || "Ask organizer for details")}</span><small>COMMUNITY OFFER · NOT VERIFIED</small></article>`).join("") : '<div class="empty-state">No seed offers yet. Offers you add on this device will appear here.</div>';
}

function switchView(name) {
  const target = $(`#view-${name}`);
  if (!target) return;
  $$(".view").forEach((view) => {
    const active = view === target;
    view.classList.toggle("active", active);
    view.hidden = !active;
  });
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === name));
  if (name === "reports") renderReports();
  if (name === "seeds") renderSeedExchange();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showPlantDetails(speciesName) {
  const species = getGuideData().species.find((item) => item.name === speciesName);
  if (!species) return;
  const row = $$(".species-row").find((item) => item.querySelector("h2").textContent.includes(speciesName));
  if (!row) return;
  const details = $(".species-row-details", row);
  const button = $(".species-detail-toggle", row);
  const opening = details.hidden;
  details.hidden = !opening;
  button.setAttribute("aria-expanded", String(opening));
  button.textContent = opening ? "Close details −" : "Species details +";
}

function regionForCoordinates(latitude, longitude) {
  if (longitude < -113 && latitude < 43) return "California";
  if (longitude < -113 && latitude >= 43) return "Pacific Northwest";
  if (longitude > -80 && latitude > 37) return "Northeast";
  return "Midwest";
}

function regionForState(state, latitude, longitude) {
  const normalized = String(state || "").toLowerCase();
  if (/california/.test(normalized)) return "California";
  if (/washington|oregon|idaho/.test(normalized)) return "Pacific Northwest";
  if (/maine|vermont|new hampshire|massachusetts|rhode island|connecticut|new york|new jersey|pennsylvania/.test(normalized)) return "Northeast";
  if (/illinois|indiana|iowa|michigan|minnesota|missouri|ohio|wisconsin|north dakota|south dakota|kansas|nebraska/.test(normalized)) return "Midwest";
  return regionForCoordinates(latitude, longitude);
}

function setUserLocation(city, state, latitude, longitude) {
  currentCity = city || "Nearby";
  currentRegion = regionForState(state, latitude, longitude);
  $("#location-error").hidden = true;
  safeWrite(STORAGE_KEYS.location, { city: currentCity, state: state || "", region: currentRegion });
  renderRegion();
  $("#report-city").value = currentCity;
  $("#community-city").value = currentCity;
  $("#seed-town").value = currentCity;
  if (Number.isFinite(latitude) && Number.isFinite(longitude)) updateWeather(latitude, longitude);
  if ($("#location-dialog").open) $("#location-dialog").close();
  showToast(`Showing the field guide near ${currentCity}.`);
}

async function lookupPlace(query) {
  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.search = new URLSearchParams({ q: query, format: "jsonv2", addressdetails: "1", limit: "1" });
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Place lookup failed (${response.status}).`);
  const results = await response.json();
  if (!results.length) throw new Error("No matching town or city was found.");
  const result = results[0];
  const address = result.address || {};
  const city = address.city || address.town || address.village || address.municipality || address.county || result.name;
  const latitude = Number(result.lat);
  const longitude = Number(result.lon);
  setUserLocation(city, address.state || "", latitude, longitude);
}

async function reverseLookup(latitude, longitude) {
  const url = new URL("https://nominatim.openstreetmap.org/reverse");
  url.search = new URLSearchParams({ lat: String(latitude), lon: String(longitude), format: "jsonv2", addressdetails: "1", zoom: "10" });
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Reverse geocoding failed (${response.status}).`);
  const result = await response.json();
  const address = result.address || {};
  const city = address.city || address.town || address.village || address.municipality || address.county;
  if (!city) throw new Error("A nearby town name was not available.");
  setUserLocation(city, address.state || "", latitude, longitude);
}

function updateWeather(latitude, longitude) {
  $("#weather-title").textContent = "Checking your local forecast…";
  $("#weather-copy").textContent = "Fetching a short-range outlook to help with planting plans.";
  $("#garden-weather-title").textContent = "Checking the local forecast…";
  $("#garden-weather-copy").textContent = "Forecast conditions can help with timing, but they do not replace local planting guidance.";
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    daily: "temperature_2m_max,precipitation_probability_max",
    forecast_days: "3",
    timezone: "auto"
  });
  fetch(url).then((response) => {
    if (!response.ok) throw new Error(`Forecast request failed (${response.status}).`);
    return response.json();
  }).then((forecast) => {
    const high = forecast.daily?.temperature_2m_max?.[0];
    const rain = forecast.daily?.precipitation_probability_max?.[0];
    if (!Number.isFinite(high) || !Number.isFinite(rain)) throw new Error("Forecast data was incomplete.");
    const temperature = `${Math.round(high)}°C`;
    const rainChance = `${Math.round(rain)}%`;
    const summary = `Tomorrow's high: ${temperature}; chance of rain: ${rainChance}.`;
    $("#weather-title").textContent = high > 30 ? "Warm weather ahead" : rain > 70 ? "Rain is in the forecast" : "Your local outlook is ready";
    $("#weather-copy").textContent = summary;
    $("#garden-weather-title").textContent = high > 30 ? "Give new plantings extra care in the heat." : rain > 70 ? "Rain is on the way—check soil drainage." : "A quick forecast for your planting plans.";
    $("#garden-weather-copy").textContent = `${summary} Use local seed-packet instructions; avoid planting in extreme heat or before a hard frost.`;
    showToast("Local forecast updated.");
  }).catch((error) => {
    console.error("Could not retrieve local forecast.", error);
    $("#weather-title").textContent = "Forecast unavailable right now";
    $("#weather-copy").textContent = "Check your connection or use a local weather service for current conditions.";
    $("#garden-weather-title").textContent = "Use a trusted local forecast.";
    $("#garden-weather-copy").textContent = "We couldn't load current weather. Keep following seed-packet instructions and your regional planting calendar.";
  });
}

function locateUser() {
  if (!navigator.geolocation) {
    $("#location-error").hidden = false;
    $("#location-error").textContent = "Location is not available in this browser. Search for your town instead.";
    return;
  }
  $("#location-error").hidden = true;
  $("#location-label").textContent = "Finding your town…";
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    reverseLookup(latitude, longitude).catch((error) => {
      console.error("Could not identify a nearby town.", error);
      currentCity = "Nearby";
      currentRegion = regionForCoordinates(latitude, longitude);
      renderRegion();
      updateWeather(latitude, longitude);
      $("#location-error").hidden = false;
      $("#location-error").textContent = "We found your coordinates but couldn't resolve a town name. Search for your city instead.";
      $("#location-dialog").showModal();
    });
  }, (error) => {
    console.error("Location request was not completed.", error);
    $("#location-label").textContent = currentCity ? `${currentCity} · ${currentRegion}` : currentRegion;
    $("#location-error").hidden = false;
    $("#location-error").textContent = error.code === error.PERMISSION_DENIED ? "Location permission was not granted. Search for your town instead." : "Could not get your location. Search for your town or try GPS again.";
  }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 });
}

function submitReport(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const report = {
    id: crypto.randomUUID(),
    species: String(data.get("species") || "").trim(),
    type: String(data.get("type") || "").trim(),
    severity: String(data.get("severity") || "").trim(),
    city: String(data.get("city") || "").trim().slice(0, 80),
    details: String(data.get("details") || "").trim(),
    createdAt: new Date().toISOString(),
    reviewedByHuman: false
  };
  const errorEl = $("#report-error");
  if (!report.species || !report.type || !report.severity || report.details.length < 8) {
    errorEl.hidden = false;
    errorEl.textContent = "Choose a species, observation, severity, and add at least 8 characters of detail.";
    return;
  }
  errorEl.hidden = true;
  const reports = safeRead(STORAGE_KEYS.reports, []);
  if (!Array.isArray(reports)) {
    errorEl.hidden = false;
    errorEl.textContent = "Saved report data could not be read. Please refresh before submitting.";
    return;
  }
  reports.push(report);
  if (!safeWrite(STORAGE_KEYS.reports, reports)) return;
  form.reset();
  $("#report-city").value = currentCity;
  renderReports();
  showToast("Your field note was saved. It is unverified and awaits human review.");
}

function submitCommunityPost(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const entry = {
    id: crypto.randomUUID(),
    kind: String(data.get("kind") || "sighting"),
    subject: String(data.get("subject") || "").trim(),
    city: String(data.get("city") || "").trim().slice(0, 80),
    text: String(data.get("text") || "").trim(),
    createdAt: new Date().toISOString()
  };
  if (!entry.subject || entry.text.length < 6) {
    $("#community-error").hidden = false;
    $("#community-error").textContent = "Choose a species or topic and write at least 6 characters.";
    return;
  }
  const entries = safeRead(STORAGE_KEYS.community, []);
  entries.push(entry);
  if (!safeWrite(STORAGE_KEYS.community, entries)) return;
  event.currentTarget.reset();
  $("#community-city").value = currentCity;
  $("#community-error").hidden = true;
  renderCommunity();
  showToast("Your community note was added on this device.");
}

function submitSeedOffer(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const offer = {
    id: crypto.randomUUID(),
    offer: String(data.get("offer") || "").trim(),
    city: String(data.get("city") || "").trim(),
    pickup: String(data.get("pickup") || "").trim(),
    quantity: String(data.get("quantity") || "").trim(),
    createdAt: new Date().toISOString()
  };
  const offers = safeRead(STORAGE_KEYS.seedOffers, []);
  offers.push(offer);
  if (!safeWrite(STORAGE_KEYS.seedOffers, offers)) return;
  event.currentTarget.reset();
  $("#seed-town").value = currentCity;
  renderSeedExchange();
  showToast("Seed offer saved on this device; it is not publicly visible.");
}

const editorFields = {
  species: [
    ["name", "Common name", "text"], ["latin", "Scientific name", "text"],
    ["status", "Conservation status", "text"], ["risk", "Display order (1 = most at risk)", "number"],
    ["range", "Range or habitat", "text"], ["summary", "Short description", "textarea"],
    ["role", "Ecosystem role", "textarea"], ["population", "Population / trend information and year", "textarea"],
    ["source", "Source / agency reference", "text"], ["image", "Photo URL (https)", "url"],
    ["icon", "Fallback symbol", "text"], ["art", "Artwork style (whale, wolf, bear, owl)", "text"]
  ],
  plants: [
    ["name", "Common name", "text"], ["latin", "Scientific name", "text"],
    ["summary", "Description", "textarea"], ["sun", "Sunlight", "text"],
    ["water", "Water needs", "text"], ["season", "Favorable planting season", "text"],
    ["care", "Planting and care tips", "textarea"], ["weather", "Seasonal weather guidance", "textarea"], ["population", "Local population / abundance information", "textarea"],
    ["image", "Photo URL (https)", "url"], ["icon", "Fallback symbol", "text"]
  ]
};

function openEntryEditor(kind, entryId = null) {
  editingEntryKind = kind;
  editingEntryId = entryId;
  const entries = getGuideData()[kind];
  const entry = entries.find((item) => item.id === entryId) || {};
  $("#manage-title").textContent = entryId ? `Edit ${kind === "species" ? "wildlife" : "native plant"}` : `Add ${kind === "species" ? "keystone species" : "native plant"}`;
  $("#manage-fields").innerHTML = editorFields[kind].map(([key, label, type]) => {
    const value = entry[key] ?? (key === "risk" ? entries.length + 1 : "");
    const element = type === "textarea"
      ? `<textarea id="manage-${key}" name="${key}" rows="3" ${["name", "summary"].includes(key) ? "required" : ""}>${escapeHtml(value)}</textarea>`
      : `<input id="manage-${key}" name="${key}" type="${key === "image" ? "text" : type}" value="${escapeHtml(key === "image" && String(value).startsWith("data:image/") ? "" : value)}" ${["name", "latin", "status"].includes(key) ? "required" : ""} ${type === "url" ? 'placeholder="https://..."' : ""} ${type === "number" ? 'min="1" step="1"' : ""} />`;
    return `<label for="manage-${key}">${label}</label>${element}`;
  }).join("");
  $("#manage-fields").insertAdjacentHTML("beforeend", '<label for="manage-imageFile">Upload a species or plant photo</label><input id="manage-imageFile" name="imageFile" type="file" accept="image/jpeg,image/png,image/webp" /><small class="photo-upload-note">Images are compressed and saved only on this device.</small>');
  $("#manage-error").hidden = true;
  $("#manage-dialog").showModal();
}

async function compressUploadedImage(file) {
  if (!file.type.startsWith("image/") || file.size > 8 * 1024 * 1024) {
    throw new Error("Choose an image smaller than 8 MB.");
  }
  const image = await createImageBitmap(file);
  const scale = Math.min(1, 1000 / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
  image.close();
  return canvas.toDataURL("image/webp", 0.78);
}

async function saveManagedEntry(event) {
  event.preventDefault();
  const kind = editingEntryKind;
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const imageFile = data.imageFile;
  delete data.imageFile;
  if (!data.name || !data.latin) {
    $("#manage-error").hidden = false;
    $("#manage-error").textContent = "Common name and scientific name are required.";
    return;
  }
  if (data.image && !/^https:\/\//i.test(data.image) && !/^data:image\/(?:jpeg|png|webp);base64,/i.test(data.image)) {
    $("#manage-error").hidden = false;
    $("#manage-error").textContent = "Use an HTTPS photo URL or upload an image from this device.";
    return;
  }
  if (imageFile instanceof File && imageFile.size) {
    try {
      data.image = await compressUploadedImage(imageFile);
    } catch (error) {
      $("#manage-error").hidden = false;
      $("#manage-error").textContent = error.message || "Could not read the selected image.";
      return;
    }
  }
  const entries = getGuideData();
  const list = entries[kind];
  const original = list.find((item) => item.id === editingEntryId);
  if (!data.image && !imageFile?.size && original?.image) data.image = original.image;
  const entry = { ...original, ...data, id: editingEntryId || `${kind}-${crypto.randomUUID()}` };
  if (kind === "species") entry.risk = Number(data.risk) || list.length + 1;
  const index = list.findIndex((item) => item.id === editingEntryId);
  if (index >= 0) list[index] = entry;
  else list.push(entry);
  if (!saveGuideData(entries)) return;
  $("#manage-dialog").close();
  renderRegion();
  showToast("Field guide entry saved on this device.");
}

function deleteManagedEntry(kind, entryId) {
  const entries = getGuideData();
  const list = entries[kind];
  const entry = list.find((item) => item.id === entryId);
  if (!entry || !window.confirm(`Delete "${entry.name}" from this device's regional field guide?`)) return;
  entries[kind] = list.filter((item) => item.id !== entryId);
  if (!saveGuideData(entries)) return;
  renderRegion();
  showToast("Field guide entry deleted from this device.");
}

function markReportReviewed(reportId) {
  const reports = safeRead(STORAGE_KEYS.reports, []);
  const report = reports.find((item) => item.id === reportId);
  if (!report) return;
  report.reviewedByHuman = true;
  if (!safeWrite(STORAGE_KEYS.reports, reports)) return;
  renderReports();
  showToast("Marked as personally reviewed; not verified as true.");
}

function handlePhoto(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast("Please choose an image file.");
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showToast("Choose an image smaller than 10 MB.");
    return;
  }
  if (photoUrl) URL.revokeObjectURL(photoUrl);
  photoUrl = URL.createObjectURL(file);
  $("#photo-preview").src = photoUrl;
  $("#photo-preview").hidden = false;
  $("#photo-placeholder").hidden = true;
  $("#compare-button").disabled = false;
  $("#scan-result").hidden = true;
}

function initializeQuiz() {
  const progress = getProgress();
  if (progress.quizCount >= quizQuestions.length) {
    $("#quiz-feedback").hidden = false;
    $("#quiz-feedback").className = "quiz-feedback success";
    $("#quiz-feedback").textContent = "You completed all the field quizzes on this device. Thanks for learning!";
    $("#quiz-submit").disabled = true;
    $("#quiz-submit").textContent = "All quizzes completed";
    return;
  }
  renderQuizQuestion(progress.quizCount);
}

function renderQuizQuestion(index) {
  const question = quizQuestions[index];
  if (!question) return;
  selectedAnswer = null;
  isQuestionAnswered = false;
  $("#quiz-step").textContent = `QUESTION ${String(index + 1).padStart(2, "0")} / ${question.topic}`;
  $("#quiz-question").textContent = question.question;
  $("#quiz-options").innerHTML = question.options.map((option, optionIndex) => `
    <button class="quiz-option" data-answer="${optionIndex}">${escapeHtml(option)}</button>`).join("");
  $("#quiz-feedback").hidden = true;
  $("#quiz-submit").disabled = false;
  $("#quiz-submit").textContent = "Check my answer →";
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      event.preventDefault();
      switchView(viewButton.dataset.view);
      return;
    }
    const speciesButton = event.target.closest("[data-species]");
    if (speciesButton) {
      switchView("wildlife");
      window.setTimeout(() => showPlantDetails(speciesButton.dataset.species), 30);
      return;
    }
    const detailButton = event.target.closest(".species-detail-toggle");
    if (detailButton) {
      const row = detailButton.closest(".species-row");
      const details = $(".species-row-details", row);
      const opening = details.hidden;
      details.hidden = !opening;
      detailButton.setAttribute("aria-expanded", String(opening));
      detailButton.textContent = opening ? "Close details −" : "Species details +";
      return;
    }
    const manageButton = event.target.closest("[data-manage]");
    if (manageButton) {
      openEntryEditor(manageButton.dataset.manage);
      return;
    }
    const editButton = event.target.closest("[data-edit-kind]");
    if (editButton) {
      openEntryEditor(editButton.dataset.editKind, editButton.dataset.entryId);
      return;
    }
    const deleteButton = event.target.closest("[data-delete-kind]");
    if (deleteButton) {
      deleteManagedEntry(deleteButton.dataset.deleteKind, deleteButton.dataset.entryId);
      return;
    }
    const reviewButton = event.target.closest(".review-report");
    if (reviewButton) {
      markReportReviewed(reviewButton.dataset.reportId);
      return;
    }
    const option = event.target.closest(".quiz-option");
    if (option && !option.disabled) {
      selectedAnswer = option.dataset.answer;
      $$(".quiz-option").forEach((button) => button.classList.toggle("selected", button === option));
      $("#quiz-feedback").hidden = true;
    }
  });
  $("#location-button").addEventListener("click", () => {
    $("#location-error").hidden = true;
    $("#location-search").value = currentCity || "";
    $("#location-dialog").showModal();
  });
  $("#location-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = $("#location-search").value.trim();
    if (!query) return;
    $("#location-error").hidden = false;
    $("#location-error").textContent = "Looking up your town…";
    lookupPlace(query).catch((error) => {
      console.error("Could not find the requested town.", error);
      $("#location-error").hidden = false;
      $("#location-error").textContent = "We couldn't find that place. Try a town and state, or use GPS.";
    });
  });
  $("#location-gps").addEventListener("click", locateUser);
  $("#weather-button").addEventListener("click", () => {
    $("#location-dialog").showModal();
    locateUser();
  });
  $("#report-form").addEventListener("submit", submitReport);
  $("#community-form").addEventListener("submit", submitCommunityPost);
  $("#seed-form").addEventListener("submit", submitSeedOffer);
  $("#manage-form").addEventListener("submit", saveManagedEntry);
  $("#seed-location-button").addEventListener("click", () => {
    $("#location-dialog").showModal();
    $("#location-search").value = currentCity || "";
  });
  $("#redeem-seeds").addEventListener("click", () => {
    const progress = getProgress();
    if (progress.points < 100) {
      showToast("Earn more points before redeeming a seed packet.");
      return;
    }
    if (!window.confirm("Use 100 points for a demo seed-packet redemption? No real seeds will be reserved.")) return;
    if (progress.seedRedeemed) {
      showToast("The demo redemption has already been used on this device.");
      return;
    }
    if (!safeWrite(STORAGE_KEYS.progress, { ...progress, points: progress.points - 100, seedRedeemed: true })) return;
    renderPoints();
    renderSeedExchange();
    showToast("Demo redemption complete. No seeds were reserved or shipped.");
  });
  $("#donate-button").addEventListener("click", () => {
    showToast("Online donations are not enabled. Add a verified operator and payment provider first.");
  });
  $("#feedback-print").addEventListener("click", () => {
    window.open("feedback-qr.png", "_blank", "noopener,noreferrer");
  });
  $("#photo-drop").addEventListener("click", () => $("#plant-photo").click());
  $("#plant-photo").addEventListener("change", (event) => handlePhoto(event.target.files[0]));
  $("#compare-button").addEventListener("click", () => {
    const result = $("#scan-result");
    result.hidden = false;
    result.innerHTML = `<strong>Photo ready for a closer look.</strong><br>Your image is not being analyzed by this prototype. Compare it with the ${escapeHtml(currentRegion)} plant profiles in the field guide, or ask a local native-plant expert.`;
  });
  $("#quiz-submit").addEventListener("click", () => {
    if (isQuestionAnswered) {
      const progress = getProgress();
      if (progress.quizCount >= quizQuestions.length) {
        $("#quiz-submit").disabled = true;
        $("#quiz-submit").textContent = "All quizzes completed";
        return;
      }
      renderQuizQuestion(progress.quizCount);
      return;
    }
    const feedback = $("#quiz-feedback");
    if (!selectedAnswer) {
      feedback.hidden = false;
      feedback.className = "quiz-feedback try-again";
      feedback.textContent = "Choose an answer first.";
      return;
    }
    const progress = getProgress();
    const currentQuestion = quizQuestions[progress.quizCount];
    if (!currentQuestion || Number(selectedAnswer) !== currentQuestion.answer) {
      feedback.hidden = false;
      feedback.className = "quiz-feedback try-again";
      feedback.textContent = currentQuestion ? "Not quite. Give it another try." : "All field quizzes are complete.";
      return;
    }
    feedback.hidden = false;
    feedback.className = "quiz-feedback success";
    const nextQuizCount = progress.quizCount + 1;
    feedback.textContent = `${currentQuestion.explanation} You earned 20 points.`;
    isQuestionAnswered = true;
    if (!safeWrite(STORAGE_KEYS.progress, { ...progress, points: progress.points + 20, quizCount: nextQuizCount, quizCompleted: nextQuizCount >= quizQuestions.length })) return;
    $$(".quiz-option").forEach((button, index) => {
      button.disabled = true;
      if (index === currentQuestion.answer) button.classList.add("correct");
      else if (index === Number(selectedAnswer)) button.classList.add("incorrect");
    });
    if (nextQuizCount >= quizQuestions.length) {
      $("#quiz-submit").disabled = true;
      $("#quiz-submit").textContent = "All quizzes completed";
    } else {
      $("#quiz-submit").textContent = "Next question →";
    }
    renderPoints();
    renderSeedExchange();
  });
}

function init() {
  $("#today-date").textContent = new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric" }).format(new Date()).toUpperCase();
  renderRegion();
  renderReports();
  renderPoints();
  initializeQuiz();
  bindEvents();
  $("#report-city").value = currentCity;
  $("#community-city").value = currentCity;
  $("#seed-town").value = currentCity;
}

init();
