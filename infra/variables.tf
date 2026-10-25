variable "region" {
  type    = string
  default = "us-east-1"
}

variable "project_name" {
  type    = string
  default = "cloud-portfolio"
}

variable "alert_email" {
  type        = string
  description = "Email that receives AWS Budget alerts."
}

variable "github_repo" {
  type        = string
  default     = "adityasharma024/portfolio"
  description = "GitHub repo allowed to deploy (owner/name)."
}

variable "create_oidc_provider" {
  type        = bool
  default     = true
  description = "Set to false if your AWS account already has the GitHub OIDC provider."
}
