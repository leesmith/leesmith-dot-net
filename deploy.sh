#!/usr/bin/env bash
#
# Sync generated site to S3 and invalidate Cloudfront distribution

if [ ! -f .env ]; then
    echo "# Project environment variables...do not commit this file." >> .env
    echo "AWS_CF_DIST_ID=" >> .env
    echo "AWS_S3_URI=" >> .env
    echo "Please add the necessary values to the .env file."
else
    export $(egrep -v '^#' .env | xargs)
    echo "CF DIST -> $AWS_CF_DIST_ID"
    echo "S3 URI -> $AWS_S3_URI"
    echo "Performing sync..."
    aws s3 sync dist s3://$AWS_S3_URI --cache-control "max-age=31536000" --delete
    echo "Invalidating cloudfront distribution..."
    aws cloudfront create-invalidation --distribution-id $AWS_CF_DIST_ID --paths "/*"
    echo "Deploy complete! 🎉"
fi
