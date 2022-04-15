
Create new table of AvailableSurveys

Create API endpoint to query surveys.

Display Available surveys and on click create a specific Survey instance tied to the user

Add type and time estimate fields



Fill Survey Table with Surveys

fetch surveys -> GET prisma.survey.readMany

On survey click -> fetch survey -> POST prisma.surveyResponse.create w/ session & surveyid


If a SurveyResponse already exists for a given Survey then display the progress and show resume in UI

Loop through Incomplete SurveyResponses and replace the Survey object

Componetize!