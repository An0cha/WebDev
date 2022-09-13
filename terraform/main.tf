resource "aws_s3_bucket" "mainbucket" {
    bucket = "rienit.com"

    website {
        redirect_all_requests_to = "https://www.rienit.com"  
    }

    tags = {
      name = "Zone Apex Bucket"
    }
}