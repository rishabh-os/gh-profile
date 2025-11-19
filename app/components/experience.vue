<script setup lang="ts">
const work_items = ref([
    {
        date: 'September 2023 - Current',
        title: 'Data Scientist, Fondazione Bruno Kessler, Italy',
        description: 'Working with large scale state of the art deep learning models for analyzing spatio-temporal data to enable precise predictions.',
        icon: 'i-lucide-rocket',
        content: 'I\'m working on it!'
    },
    {
        date: 'June 2022 - June 2023',
        title: 'Associate Solution Advisor, Deloitte, India',
        description: 'Engaged in thorough analysis and validation of financial models for banks. Conducted assessments, used statistical methods, and collaborated with teams to improve accuracy and performance.',
        icon: 'lucide:banknote',
        content: 'Deloitte is a terrible place to work at. All consulting companies are a cancer upon this earth. If you or someone you know is working at one, leave right now and never look back.'
    }
])

const project_items = ref([
    {
        date: "June 2021 - May 2022",
        title: "Anomaly Detection in CCTV Footage, under Aniruddha Pant, AlgoAnalytics, Pune",
        description: "An advanced system using unsupervised anomaly and outlier detection techniques was developed to enhance security for customers through real-time reporting of incidents.",
        content: "I've included a link to my final presentation as well as my entire thesis. What more detail do you want?!",
        links: [{
            label: 'Defense Presentation',
            url: 'https://thesis-presentation.vercel.app/',
            icon: 'lucide:presentation',
        }, {
            label: 'Thesis',
            url: 'https://gh-profile-rishabh-os.vercel.app/output_print.pdf',
            icon: 'lucide:file-text',
        }],
        icon: 'lucide:camera',
    },
    {
        date: "August 2020 - May 2021",
        title: "Analysis of Gravitational Wave Data using Machine Learning, under Anupreeta More, IUCAA, Pune",
        description: "LIGO data was analyzed using unsupervised machine learning algorithms to identify and classify diverse signals, utilizing bicoherence maps as input data.",
        content: "In total, the dataset consisted of around 40,000 images of size 576x576. We employed a miriad of techniques to analyse this data. We tried PCA and t-SNE for dimensionality reduction. K-Means, DBSCAN, and OPTICS were used to cluster the data before moving on to a deep learning approach that utilized convolutional autoencoders.",
        icon: 'lucide:telescope',
    },
    {
        date: "December 2019 - June 2020",
        title: "Applicaitions of Machine Learning in Quantum Information, under T. S. Mahesh, IISER, Pune",
        description: "A multi-qubit system was simulated to gain greater insight into the practical value of quantum discord and other quantum correlations, utilizing a Restricted Boltzmann machine.",
        content: "RBMs excel at learning probability distributions. This behaviour is exactly what we needed to test and validate the results we obtained from real qubit systems in the lab. The results from this model could then be used to scale up the number of qubits simulated much further than possible in the lab, overcoming physical and economical limitations.",
        icon: 'lucide:atom',
    },
    {
        date: "December 2018",
        title: "Stellar Signal Analysis, under C. V. Dharmadhikari, IISER, Pune",
        description: "Worked on setting up and eliminating noise from antennas to record radiation from the night sky, using a Lecher Wire as the basis.",
        icon: 'lucide:radio-tower',
    },
    {
        date: "May 2018 - July 2018",
        title: "N-Body Simulations and Analysis, under Najam Hassan, University of Osmania, Hyderabad",
        description: "Stellar interaction modeling in clusters was performed through simulations using Python and Fortran with Sverre Aarseth's highly regarded n-body simulation programs.",
        content: "Stellar dynamics, especially in clusters, can be quite intricate. These interactions were modelled in highly performant Fortran code. The results were exported and analysed using a more modern approach in Python. A heavy focus was placed on building this entire pipeline.",
        icon: 'lucide:star',
    }
])

const education_items = ref([
    {
        date: 'August 2017 - May 2022',
        title: 'BS-MS Dual Degree in Physics, IISER, Pune',
        description: 'There isn\'t much to say academically here, so instead I\'ll just say a few words about the experiences I\'ve had at IISER. I\'m extremely grateful to all my friends for the best 5 years of my life. IISER was an unforgettable adventure, and one that I will cherish for the rest of my life.',
        icon: 'lucide:graduation-cap',
    }
])
</script>

<template>
    <div id="experience">
        <ExpTimeline title="Work" :items="work_items" />
        <ExpTimeline title="Projects" :items="project_items" />
        <ExpTimeline title="Education" :items="education_items" />
    </div>

</template>