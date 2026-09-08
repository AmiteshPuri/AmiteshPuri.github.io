// All site content in one place. Everything here is drawn from Amitesh's CV,
// certificates, and the two uploaded reports — no invented results.

export const profile = {
  name: 'Amitesh Puri',
  // The name is rendered with the first word bold and the rest light (al-folio style).
  firstName: 'Amitesh',
  lastName: 'Puri',
  location: 'West Bengal, India',
  email: 'amiteshpuri007@gmail.com',
  github: 'https://github.com/AmiteshPuri',
  githubUser: 'AmiteshPuri',
  scholar: null,
  linkedin: 'https://www.linkedin.com/in/amitesh-puri-7b6b991aa/',
  cv: 'cv/Amitesh_Puri_CV.pdf',
  photo: 'images/profile.jpg',
  // Two short paragraphs — general interests, no specific problem named.
  bio: [
    'I am broadly interested in mathematics, dynamical systems, and generative modelling, and in the places where they meet: how learned models can respect the structure of a system, and how to tell when a model stops being trustworthy. I like questions that can be pinned down and measured, and studies that hold everything fixed but one thing so the answer is clean.',
    'I recently completed an M.Sc. in Applied Mathematics & Computing at MIT Manipal. The reports below are self-contained studies I ran end to end, from setup through to evaluation, and each reports what the measurement returned, including the parts that cut against the expected story.',
  ],
}

export const nav = [
  { label: 'About', href: '#top' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// The reports — the centrepiece. Blurbs are short, self-contained descriptions
// (the full detail lives in each PDF).
export const reports = [
  {
    id: 'fm-ood',
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
    title: 'When does a geodesic probability path help latent flow matching?',
    subtitle: 'A controlled study on a latent PDE surrogate',
    venue: 'Independent research report',
    year: '2026',
    pdf: 'reports/fm-paths.pdf',
    preview: 'reports/fm-paths-preview.png',
    code: 'https://github.com/AmiteshPuri/FM-paths',
    blurb:
      'Does the geometry of the generative probability path, a straight line versus a geodesic on a sphere, change the outcome of latent flow matching? With the data, latent space, network, optimiser and seed all held fixed, the two paths come out equal: a clean null result, with a controlled ablation showing geometry helps only when the data actually lie on the assumed manifold.',
    tags: ['Flow Matching', 'Riemannian paths', 'latent generative model', 'VQ-VAE', 'ablation study'],
  },
  {
    id: 'msc-graph',
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
    detail: 'Final grade 62%',
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
    name: 'Generative Modelling from First Principles',
    org: 'IISc',
    when: '2026',
    detail: 'Ranked 6th in the final project assessment; certificate forthcoming',
    pdf: null,
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

export const socials = (p = profile) => [
  { label: 'Email', href: `mailto:${p.email}`, value: p.email, icon: 'mail' },
  { label: 'GitHub', href: p.github, value: `github.com/${p.githubUser}`, icon: 'github' },
  { label: 'LinkedIn', href: p.linkedin, value: 'linkedin.com/in/amitesh-puri', icon: 'linkedin' },
  { label: 'Curriculum vitae', href: p.cv, value: 'Amitesh_Puri_CV.pdf', icon: 'cv' },
]
