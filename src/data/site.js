// All site content in one place. Everything here is drawn from Amitesh's CV,
// certificates, reports and publication record, with no invented results.

export const profile = {
  name: 'Amitesh Puri',
  // The name is rendered with the first word bold and the rest light (al-folio style).
  firstName: 'Amitesh',
  lastName: 'Puri',
  location: 'West Bengal, India',
  email: 'amiteshpuri007@gmail.com',
  github: 'https://github.com/AmiteshPuri',
  githubUser: 'AmiteshPuri',
  scholar: 'https://scholar.google.com/citations?user=-C3E7g8AAAAJ',
  linkedin: 'https://www.linkedin.com/in/amitesh-puri-7b6b991aa/',
  cv: 'cv/Amitesh_Puri_CV.pdf',
  photo: 'images/profile.jpg',
  // Short paragraphs: the research direction, the background behind it, then why dynamical systems and how the reports are done.
  bio: [
    'I am interested in machine learning for physical systems, where mathematics, dynamical systems and generative modelling meet. A numerical solver can be applied to a new system once its governing equations are written down, whereas a learned model usually has to be trained again. I want to understand how learned representations can capture the structure of physical dynamics, so that a model stays reliable when parameters, regimes or the equations themselves change, and adapts to a new system with little or no fine-tuning.',
    'I completed my M.Sc. in Applied Mathematics and Computing at Manipal Academy of Higher Education, and have done coursework from IISc Bangalore on the mathematical foundations of machine learning and on generative AI from first principles. My master’s project on distribution shift in graph learning and my later experiments with generative models of fluid flow raised the same question: how well does a learned model capture the structure of a system, and how much does that hold up under OOD settings.',
    'What draws me to dynamical systems is that a learned model’s errors rarely stay small. They build up over a rollout, so a model that is accurate one step ahead can drift far from the true trajectory, especially once conditions move away from the training data.',
  ],
}

// Shown as a short list under the bio.
export const interests = [
  {
    title: 'Transferable representations of physical dynamics',
    text: 'Latent representations that stay consistent across regimes, parameters and forms of the governing equations.',
  },
  {
    title: 'Generative modelling of physical trajectories',
    text: 'Flow matching, diffusion models and stochastic interpolants, and predictors that work in a learned latent space, for uncertainty, multimodality and long rollouts inference.',
  },
  {
    title: 'Physical consistency under distribution shift',
    text: 'Building governing equations, conservation laws and other scientific priors into learning, and testing whether the benefit holds under distribution shifts.',
  },
]

export const nav = [
  { label: 'About', href: '#top' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// Peer-reviewed publications, newest first. `self` is shown in bold in the author list.
export const publications = [
  {
    title: 'Message Passing Graph Neural Networks: A Study',
    authors: ['Simran', 'A. Puri', 'S. Akansha'],
    self: 'A. Puri',
    venue: 'Global and Stochastic Analysis',
    details: '12(1), 80–89',
    year: '2025',
    url: 'https://doi.org/10.64837/gsa.12.1.7',
  },
]

// The reports — the centrepiece. Blurbs are short, self-contained descriptions
// (the full detail lives in each PDF). Reports are listed under their `group` heading.
export const reports = [
  {
    id: 'fm-ood',
    group: 'Independent research reports',
    title: 'Physics-residual Flow Matching under distribution shift',
    subtitle: 'A study on next-step generative modelling',
    venue: 'Independent research report',
    year: '2026',
    pdf: 'reports/fm-ood-residual.pdf',
    preview: 'reports/fm-ood-preview.png',
    code: 'https://github.com/AmiteshPuri/fm-ood-residual',
    blurb:
      'Does adding a physics-residual penalty actually help a flow-matching model, and is the conflict-free PBFM formulation worth its complexity over a plain weighted residual? Measured across many seeds, sampling budgets, and graded distribution shifts, and reported as measured, including where the residual helps in distribution but reverses under shift.',
    tags: ['Flow Matching', 'physics residual', 'distribution shift', 'PBFM / ConFIG'],
  },
  {
    id: 'fm-paths',
    group: 'Independent research reports',
    title: 'When does a geodesic probability path help latent flow matching?',
    subtitle: 'A controlled study on a latent PDE surrogate',
    venue: 'Independent research report',
    year: '2026',
    pdf: 'reports/fm-paths.pdf',
    preview: 'reports/fm-paths-preview.png',
    code: 'https://github.com/AmiteshPuri/FM-paths',
    blurb:
      'Does the geometry of the generative probability path, a straight line versus a geodesic on a sphere, change the outcome of latent flow matching? With the data, latent space, network, optimiser and seed all held fixed, the two paths come out equal: a clean null result, and an ablation shows path geometry helps only when the data actually lie on the assumed manifold.',
    tags: ['Flow Matching', 'Riemannian paths', 'latent generative model', 'VQ-VAE', 'ablation study'],
  },
  {
    id: 'msc-graph',
    group: 'Master’s research report',
    title: 'Addressing conditional shift in graph data: an empirical study of distance metrics',
    subtitle: 'M.Sc. research report · MIT Manipal',
    venue: 'M.Sc. research report',
    year: '2025',
    pdf: 'thesis/MSc_Project_Report.pdf',
    preview: 'reports/msc-preview.png',
    code: 'https://github.com/AmiteshPuri/MSc--Research-Project',
    blurb:
      'How well does semi-supervised node classification hold up under conditional distributional shift, and can distance-metric regularisers help? An empirical study across several GNN architectures that adds distance metrics as auxiliary regularisers and evaluates coverage under shift with conformal prediction.',
    tags: ['graph neural networks', 'distributional shift', 'distance metrics', 'conformal prediction'],
  },
]

export const education = [
  {
    degree: 'M.Sc. Applied Mathematics & Computing',
    place: 'Manipal Academy of Higher Education (MIT Manipal)',
    when: 'Aug 2023 – Jun 2025',
    detail: 'CGPA 7.28 / 10',
    cert: 'certificates/MSc_Degree_Certificate.pdf',
  },
  {
    degree: 'B.Sc. Mathematics',
    place: 'Ramnagar College, Vidyasagar University',
    when: 'Jul 2017 – Oct 2020',
    detail: 'Final grade 6.21 / 10',
    cert: null,
  },
  {
    degree: 'Higher Secondary (Class XII)',
    place: 'Kishorenagar Sachindra Siksha Sadan',
    when: '2014 – 2016',
    detail: '74.5%',
    cert: null,
  },
]

export const thesis = {
  title: 'Addressing Conditional Shift in Graph Data: An Empirical Study of Distance Metrics',
  role: 'M.Sc. research report',
  supervisor: 'Dr. Akansha Singh, Department of Mathematics',
  code: 'https://github.com/AmiteshPuri/MSc--Research-Project',
  pdf: 'thesis/MSc_Project_Report.pdf',
  points: [
    'Studied the robustness of semi-supervised node classification under conditional distributional shift across several GNN architectures on benchmark datasets.',
    'Added distance metrics as auxiliary regularisers that penalise divergence between training and test node representations, isolating each metric’s effect in controlled ablations.',
    'Used conformal prediction to evaluate coverage guarantees under shift; implemented in PyTorch with fixed seeds and public code.',
  ],
}

export const credentials = [
  {
    name: 'Generative AI – Principles and Applications',
    org: 'IISc Bangalore',
    when: 'May – Jul 2026',
    detail: 'Grade A+; ranked 6th in the final project assessment',
    pdf: 'certificates/IISc_Generative_AI_Principles_and_Applications.pdf',
  },
  {
    name: 'Mathematical Foundations of Machine Learning',
    org: 'NPTEL · IISc Bangalore',
    when: 'Jan – Apr 2026',
    detail: 'Consolidated score 68%',
    pdf: 'certificates/NPTEL_Math_Foundations_ML.pdf',
  },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'R'] },
  { group: 'ML / DL', items: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face Transformers', 'scikit-learn', 'PyCaret'] },
  { group: 'Scientific & data', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'pseudospectral solvers'] },
  { group: 'Tools', items: ['Git', 'Gradio', 'Streamlit', 'Hugging Face Hub', 'Argilla'] },
]

export const socials = (p = profile) =>
  [
    { label: 'Email', href: `mailto:${p.email}`, value: p.email, icon: 'mail' },
    { label: 'GitHub', href: p.github, value: `github.com/${p.githubUser}`, icon: 'github' },
    p.scholar && { label: 'Google Scholar', href: p.scholar, value: 'scholar.google.com', icon: 'scholar' },
    { label: 'LinkedIn', href: p.linkedin, value: 'linkedin.com/in/amitesh-puri', icon: 'linkedin' },
    { label: 'Curriculum vitae', href: p.cv, value: 'Amitesh_Puri_CV.pdf', icon: 'cv' },
  ].filter(Boolean)
