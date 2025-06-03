# AWS-Api-With-Cognito
Progetto dimostrativo di un'architettura serverless su AWS per la creazione di API RESTful sicure, evidenziando l'utilizzo di Lambda, API Gateway, DynamoDB e servizi di autenticazione AWS.

## Inizializzazione del progetto

1. Clona il repository:
   ```bash
   git clone <repo-url>
   cd AWS-Api-With-Cognito
   ```
2. Installa le dipendenze:
   ```bash
   yarn install
   ```
3. (Opzionale) Modifica la configurazione in `.projenrc.ts` se necessario.
4. Genera i file di progetto, builda, sintetizza e deploya tramite i comandi Projen:
   ```bash
   npx projen
   npx projen build
   npx projen synth
   npx projen deploy
   ```

## Risorse create

- **DynamoDB Table**: Una tabella chiamata `EcommerceTable-<stage>` con chiavi primarie `PK` (partition key) e `SK` (sort key), modalità on-demand, e un indice globale secondario `GSI-Items-<stage>`.
- **API Gateway REST API**: Un'API chiamata `Ecommerce Service - <stage>` con endpoint regionale. Espone la risorsa `/user/details` con metodo `GET` che restituisce una risposta mock di esempio.

> Sostituisci `<stage>` con l'ambiente desiderato (es. `dev`, `prod`).

Per ulteriori sviluppi, aggiungi nuove risorse e metodi seguendo la struttura dei costrutti presenti nella cartella `src/constructs/`.
