GOOGLE_PROJECT_ID=pro-gecko-349214
CLOUD_RUN_SERVICE=dinara-api-service
INSTANCE_CONNECTION_NAME=dinara-api:asia-southeast2:dinara-db-instance
DB_USER=root
DB_PASS=
DB_NAME=dinaradb

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
    --project=$GOOGLE_PROJECT_ID

gcloud run deploy $CLOUD_RUN_SERVICE \
    --image gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
    --add-cloudsql-instances $INSTANCE_CONNECTION_NAME \
    --update-env-vars INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME, DB_PASS=$DB_PASS, DB_USER=$DB_USER,DB_NAME=$DB_NAME \
    --platform managed \
    --region us-central1 \
    --allow-unauthencticated \
    --project=$GOOGLE_PROJECT_ID