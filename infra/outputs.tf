output "site_url" {
  value = "https://${aws_cloudfront_distribution.cdn.domain_name}"
}

output "bucket_name" {
  value = aws_s3_bucket.site.id
}

output "distribution_id" {
  value = aws_cloudfront_distribution.cdn.id
}

output "github_role_arn" {
  value = aws_iam_role.gha.arn
}
