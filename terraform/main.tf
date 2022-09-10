resource "aws_s3_bucket" "mainbucket" {
    bucket = "rienit.com"
    
    tags = {
      name = "Zone Apex Bucket"
    }
}