// All site content in one place. Everything here is drawn from Amitesh's CV,
// certificates, and the two uploaded reports — no invented results.

export const profile = {
  name: 'Amitesh Puri',
  role: 'Scientific machine learning · applied mathematics',
  location: 'West Bengal, India',
  // One-paragraph positioning, written from the work.
  lede:
    'I build generative and representation-learning methods for partial differential equations, and I care most about keeping the structure of the physics intact and knowing when a learned model stops being trustworthy. My recent work studies flow matching for 2D Navier–Stokes from two angles: whether a physics residual helps under distribution shift, and whether the geometry of the generative path matters at all.',
  email: 'amiteshpuri007@gmail.com',
  github: 'https://github.com/AmiteshPuri',
  githubUser: 'AmiteshPuri',
  // Placeholder — set your profile URL.
  linkedin: 'https://www.linkedin.com/',
  cv: 'cv/Amitesh_Puri_CV.pdf',
  photo: 'images/profile.jpg',
}

export const nav = [
  { label: 'Research', href: '#research' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

// The two reports — the centrepiece. Summaries and findings are faithful to the PDFs.
export const reports = [
  {
    id: 'fm-ood',
    title: 'Physics-residual Flow Matching under distribution shift',
    subtitle: 'A study on next-step 2D Navier–Stokes generation',
    year: '2026',
    pdf: 'reports/fm-ood-residual.pdf',
    preview: 'reports/fm-ood-preview.png',
    code: 'https://github.com/AmiteshPuri/fm-ood-residual',
    summary:
      'What does a physics-residual penalty actually do to a Flow Matching model that generates the next state of a 2D Navier–Stokes flow, and is the conflict-free formulation (PBFM) worth its complexity over a plain weighted residual? Run as a measurement rather than a demonstration: five seeds, seven sampling budgets, four out-of-distribution shift families with graded severity, and a dense sweep of the residual weight — reported as measured, without selection.',
    findings: [
      'In distribution, a one-line weighted residual (λ = 0.005) improves every tracked metric at once — about 37% lower relative L2 and 44% lower PDE residual than the plain baseline.',
      'It reaches the baseline’s best accuracy with roughly one-eighth of the sampling budget.',
      'The parameter-free conflict-free method (PBFM) is statistically indistinguishable from the baseline on every in-distribution axis at five seeds.',
      'Under higher-wavenumber initial conditions and stronger forcing the advantage does not carry over and often reverses: the residual models become less accurate and roll out less stably, with PBFM weakest of the three.',
      'The residual only helps inside a narrow weight band; outside it the model collapses on every axis at once.',
    ],
    tags: ['Flow Matching', '2D Navier–Stokes', 'physics residual', 'distribution shift', 'PBFM / ConFIG', 'rollout stability'],
  },
  {
    id: 'fm-paths',
    title: 'When does a geodesic probability path help latent flow matching?',
    subtitle: 'A controlled study on a 2D Navier–Stokes surrogate',
    year: '2026',
    pdf: 'reports/fm-paths.pdf',
    preview: 'reports/fm-paths-preview.png',
    code: 'https://github.com/AmiteshPuri/FM-paths',
    summary:
      'Flow matching rarely questions its probability path — the family of distributions linking noise to data as synthetic time runs from zero to one. On a latent PDE surrogate whose tokens are ordinary vectors, how to interpolate between them is a real choice. This study asks whether a straight-line path or a geodesic on a sphere changes the outcome, with the data, latent space, network, optimiser and seed all held fixed so any difference is the path alone.',
    findings: [
      'Over three converged, seed-matched runs the two paths come out equal — on accuracy, on the spectrum once seed noise is removed, and on step robustness. A genuine null result.',
      'A single-seed run first favoured the straight line, but that lead did not survive seeding, convergence, and repeats.',
      'A controlled ablation sharpens the question: geometry helps only when the data actually lie on the assumed manifold.',
      'The real VQ-VAE latents sit off the sphere (radius CV ≈ 0.27, intrinsic dimension ≈ 5.5), so the sphere gives no benefit — and no penalty either, because the conditional task supplies the length the sphere drops.',
    ],
    tags: ['Flow Matching', 'Riemannian paths', 'latent generative model', 'VQ-VAE', '2D Navier–Stokes', 'ablation study'],
  },
]

export const education = [
  {
    degree: 'M.Sc. Applied Mathematics & Computing',
    place: 'Manipal Academy of Higher Education (MIT Manipal)',
    when: 'Aug 2023 – Jun 2025',
    detail: 'CGPA 7.28 / 10',
  },
  {
    degree: 'B.Sc. Mathematics',
    place: 'Ramnagar College, Vidyasagar University',
    when: 'Jul 2017 – Oct 2020',
    detail: 'Final grade 62%',
  },
  {
    degree: 'Higher Secondary (Class XII)',
    place: 'Kishorenagar Sachindra Siksha Sadan',
    when: '2014 – 2016',
    detail: '74.5%',
  },
]

export const thesis = {
  title: 'Addressing Conditional Shift in Graph Data: An Empirical Study of Distance Metrics',
  role: 'Master’s research report',
  supervisor: 'Dr. Akansha Singh, Department of Mathematics',
  code: 'https://github.com/AmiteshPuri/MSc--Research-Project',
  points: [
    'Studied the robustness of semi-supervised node classification under conditional distributional shift across several GNN architectures on benchmark datasets.',
    'Added distance metrics as auxiliary regularisers that penalise divergence between training and test node representations, isolating each metric’s effect in controlled ablations.',
    'Used conformal prediction to evaluate coverage guarantees under shift; implemented in PyTorch with fixed seeds and public code.',
  ],
}

export const credentials = [
  {
    name: 'Mathematical Foundations of Machine Learning',
    org: 'NPTEL · IISc Bangalore',
    when: 'Jan – Apr 2026',
    detail: 'Elite — consolidated 68% (assignments 24.69/25, exam 42.97/75)',
    pdf: 'certificates/NPTEL_Math_Foundations_ML.pdf',
  },
  {
    name: 'Generative Modelling from First Principles',
    org: 'IISc',
    when: '2026',
    detail: 'Ranked 6th in the final project assessment; certificate forthcoming',
    pdf: null,
  },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'R'] },
  { group: 'ML / DL', items: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face Transformers', 'scikit-learn', 'PyCaret'] },
  { group: 'Scientific & data', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'pseudospectral solvers'] },
  { group: 'Tools', items: ['Git', 'Gradio', 'Streamlit', 'Hugging Face Hub', 'Argilla'] },
]

// Secondary — other public repositories.
export const otherWork = [
  {
    name: 'PI-Latent',
    blurb: 'Physics-informed latent generative modelling for 2D Navier–Stokes: a Transformer VQ-VAE with latent flow matching.',
    href: 'https://github.com/AmiteshPuri/PI-Latent',
  },
  {
    name: 'NO-stresstesting',
    blurb: 'Failure diagnostics for neural operators (FNO, DeepONet, UNO) on Darcy flow under distribution shift.',
    href: 'https://github.com/AmiteshPuri/NO-stresstesting',
  },
  {
    name: 'MSc research project',
    blurb: 'Code for the Master’s thesis on conditional shift in graph data and distance-metric regularisers.',
    href: 'https://github.com/AmiteshPuri/MSc--Research-Project',
  },
]

export const socials = (p = profile) => [
  { label: 'Email', href: `mailto:${p.email}`, value: p.email, icon: 'mail' },
  { label: 'GitHub', href: p.github, value: `github.com/${p.githubUser}`, icon: 'github' },
  { label: 'LinkedIn', href: p.linkedin, value: 'Set your profile URL', icon: 'linkedin' },
  { label: 'Curriculum vitae', href: p.cv, value: 'Amitesh_Puri_CV.pdf', icon: 'cv' },
]
