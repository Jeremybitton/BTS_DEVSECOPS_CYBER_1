| Vulnérabilité Référence (CVE/advisory) | Correctif appliqué (commande / version) | Gravité (CVSS / label) | OWASP Top-10 (2021)                                                                                               |
|----------------------------------------|-----------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------|
| CVE-2021-23337 (lodash)                | npm install lodash@4.17.21| HIGH 7,2             | A03:2021 – Injection                                                                                              |
| CVE-2020-28500 (lodash)                |  npm install lodash@4.17.21`| MEDIUM 5,3           | A03:2021 – Injection                                                                                              |
| CVE-2022-24771 (node-forge)            |npm install node-forge@^1.3.0| HIGH 7,5             | A08:2021 – Software and Data Integrity Failures                                                                   |
| CVE-2022-24772 (node-forge)            |npm install node-forge@^1.3.0| HIGH                 | A08:2021 – Software and Data Integrity Failures                                                                   |
| CVE-2022-0122 (node-forge)             | npm install node-forge@^1.3.0| MEDIUM               | A01:2021 – Broken Access Control                                                                                  |
| CVE-2022-24773 (node-forge)            | npm install node-forge@^1.3.0| MEDIUM               | A08:2021 – Software and Data Integrity Failures                                                                   |
| GHSA-5rrq-pxf6-6jx5 (node-forge)       |npm install node-forge@^1.3.0| LOW                  | A03:2021 – Injection                                                                                              |
| GHSA-gf8q-jrpm-jvxq (node-forge)       | npm install node-forge@^1.3.0| LOW                  | A05:2021 – Security Misconfiguration                                                                              |
| CVE-2020-7660 (serialize-javascript)   | npm install serialize-javascript@>=3.1.0 | HIGH                 | A03:2021 – Injection                                                                                              |
| CVE-2019-16769 (serialize-javascript)  |npm install serialize-javascript@>=3.1.0 | MEDIUM               | A03:2021 – Injection(Pour corriger la dernière vulnérabilité on va dans le package.json et on change la version ) |
| .env                                   |dans le .gitignore| HIGH                 | a supprimer de github car push dans le main                                                                       |
| private-node.pem                       |dans le .gitignore| HIGH                 | a supprimer de github car push dans le main                                                                       ||
| private-node.pem.pub                   |dans le .gitignore| HIGH                 | a supprimer de github car push dans le main                                                                       ||
| snyk   update serialize-javascript dans le package.json car tres vulnerable|package.json| HIGH| A06:2021 - Vulnérable and Outdated Components                                                                     |
| snyk   update serialize-javascript dans le package.json car tres vulnerable|package.json| HIGH| A06:2021 - Vulnérable and Outdated Components                                                                     |
| modif du unsafe serialize en safeserialize + unsafe supprimer car plus utile|package.json| HIGH| A03:2021 – Injection   et   A08:2021 – Software and Data Integrity Failures|







