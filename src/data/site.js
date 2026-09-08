// All site content in one place. Everything here is drawn from Amitesh's CV,
// certificates, and the two uploaded reports — no invented results.

export const profile = {
  name: 'Amitesh Puri',
  // The name is rendered with the first word bold and the rest light (al-folio style).
  firstName: 'Amitesh',
  lastName: 'Puri',
  role: 'Scientific machine learning',
  location: 'West Bengal, India',
  status: 'Seeking a PhD position for 2026',
  email: 'amiteshpuri007@gmail.com',
  github: 'https://github.com/AmiteshPuri',
  githubUser: 'AmiteshPuri',
  scholar: null,
  // Placeholder — set your profile URL.
  linkedin: 'https://www.linkedin.com/',
  cv: 'cv/Amitesh_Puri_CV.pdf',
  photo: 'images/profile.jpg',
  // Two short paragraphs, written from the work.
  bio: [
    'I build generative and representation-learning methods for partial differential equations, and I care most about keeping the structure of the physics intact and knowing when a learned model stops being trustworthy. My recent work studies flow matching for the 2D Navier–Stokes equations from two angles: whether a physics residual actually helps under distribution shift, and whether the geometry of the generative path matters at all.',
    'I recently completed an M.Sc. in Applied Mathematics & Computing at MIT Manipal, where my thesis studied conditional distributional shift in graph data. I am now looking for a PhD position in scientific machine learning. The two reports below are self-contained studies I ran end to end — from data generation through to evaluation — and both report what the measurement returned, including the parts that cut against the expected story.',
  ],
}

export const nav = [
  { label: 'About', href: '#top' },
  { label: 'Reports', href: '#reports' },
  { label: 'Code', href: '#code' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

// The two reports — the centrepiece. Summaries and findings are faithful to the PDFs.
export const reports = [
  {
    id: 'fm-ood',
    title: 'Physics-residual Flow Matching under distribution shift',
    subtitle: 'A study on next-step 2D Navier–Stokes generation',
    venue: 'Independent research report',
    year: '2026',
    pdf: 'reports/fm-ood-residual.pdf',
    preview: 'reports/fm-ood-preview.png',
    code: 'https://github.com/AmiteshPuri/fm-ood-residual',
    abstract:
      'This study measures what a physics-residual penalty does to a Flow Matching model that generates the next state of a 2D Navier–Stokes flow, and how a simple weighted residual compares against the conflict-free formulation used in Physics-Based Flow Matching (PBFM). The comparison is run across 5 seeds, 7 sampling budgets, 4 out-of-distribution shift families with graded severity, and a dense sweep of the residual weight. The results are reported as measured, without selection. In distribution, a one-line weighted residual (λ = 0.005) improves every metric that was tracked, reducing relative L2 by about 37% and the PDE residual by about 44% over the plain baseline, while the parameter-free conflict-free method (PBFM) is statistically indistinguishable from the baseline on all of them. Under the two shifts that actually stress the operator, higher-wavenumber initial conditions and stronger forcing, the residual advantage does not carry over and in several cases reverses: the residual-trained models become less accurate and roll out less stably than the baseline, with PBFM the weakest of the three. The residual is useful only inside a narrow weight band; outside it the model collapses on every axis at once.',
    findings: [
      'In distribution, a one-line weighted residual (λ = 0.005) improves every tracked metric at once — about 37% lower relative L2 and 44% lower PDE residual than the plain baseline.',
      'It reaches the baseline’s best accuracy with roughly one-eighth of the sampling budget.',
      'The parameter-free conflict-free method (PBFM) is statistically indistinguishable from the baseline on every in-distribution axis at five seeds.',
      'Under higher-wavenumber initial conditions and stronger forcing the advantage does not carry over and often reverses, with PBFM weakest of the three.',
      'The residual only helps inside a narrow weight band; outside it the model collapses on every axis at once.',
    ],
    tags: ['Flow Matching', '2D Navier–Stokes', 'physics residual', 'distribution shift', 'PBFM / ConFIG'],
  },
  {
    id: 'fm-paths',
    title: 'When does a geodesic probability path help latent flow matching?',
    subtitle: 'A controlled study on a two-dimensional Navier–Stokes surrogate',
    venue: 'Independent research report',
    year: '2026',
    pdf: 'reports/fm-paths.pdf',
    preview: 'reports/fm-paths-preview.png',
    code: 'https://github.com/AmiteshPuri/FM-paths',
    abstract:
      'Flow matching rarely questions its probability path — the family of distributions that links a prior to the data as synthetic time runs from zero to one. On a latent PDE surrogate whose tokens are ordinary vectors, how to interpolate between them is a real choice. This report asks whether a straight-line path or a geodesic on a sphere changes the outcome, holding the data, latent space, network, optimiser and seed fixed so that any difference is the path alone. Over three converged, seed-matched runs the two paths come out equal — on accuracy, on the spectrum once seed noise is removed, and on step robustness: a genuine null result. A single-seed run first favoured the straight line, but that lead did not survive seeding, convergence, and repeats. A controlled ablation sharpens the question: geometry helps only when the data actually lie on the assumed manifold. The real VQ-VAE latents sit off the sphere (radius CV ≈ 0.27, intrinsic dimension ≈ 5.5), so the sphere gives no benefit — and no penalty either, because the conditional task supplies the length the sphere drops.',
    findings: [
      'Over three converged, seed-matched runs the straight-line and geodesic paths come out equal on accuracy, spectrum, and step robustness — a genuine null result.',
      'A single-seed run first favoured the straight line, but that lead did not survive seeding, convergence, and repeats.',
      'A controlled ablation sharpens the question: geometry helps only when the data actually lie on the assumed manifold.',
      'The real VQ-VAE latents sit off the sphere (radius CV ≈ 0.27, intrinsic dimension ≈ 5.5), so the sphere gives no benefit — and no penalty either.',
    ],
    tags: ['Flow Matching', 'Riemannian paths', 'latent generative model', 'VQ-VAE', 'ablation study'],
  },
]

// Secondary — public repositories (the "Code" section, al-folio "software" style).
export const otherWork = [
  {
    name: 'fm-ood-residual',
    blurb:
      'Physics-residual Flow Matching under distribution shift — full pipeline for the study above (data, training, sweeps, evaluation).',
    href: 'https://github.com/AmiteshPuri/fm-ood-residual',
  },
  {
    name: 'FM-paths',
    blurb:
      'Straight-line vs. geodesic probability paths for latent flow matching on a 2D Navier–Stokes surrogate.',
    href: 'https://github.com/AmiteshPuri/FM-paths',
  },
  {
    name: 'PI-Latent',
    blurb:
      'Physics-informed latent generative modelling for 2D Navier–Stokes: a Transformer VQ-VAE with latent flow matching.',
    href: 'https://github.com/AmiteshPuri/PI-Latent',
  },
  {
    name: 'NO-stresstesting',
    blurb:
      'Failure diagnostics for neural operators (FNO, DeepONet, UNO) on Darcy flow under distribution shift.',
    href: 'https://github.com/AmiteshPuri/NO-stresstesting',
  },
  {
    name: 'MSc--Research-Project',
    blurb: 'Code for the Master’s thesis on conditional shift in graph data and distance-metric regularisers.',
    href: 'https://github.com/AmiteshPuri/MSc--Research-Project',
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

export const socials = (p = profile) => [
  { label: 'Email', href: `mailto:${p.email}`, value: p.email, icon: 'mail' },
  { label: 'GitHub', href: p.github, value: `github.com/${p.githubUser}`, icon: 'github' },
  { label: 'LinkedIn', href: p.linkedin, value: 'Set your profile URL', icon: 'linkedin' },
  { label: 'Curriculum vitae', href: p.cv, value: 'Amitesh_Puri_CV.pdf', icon: 'cv' },
]
