//! Security Policy module for the Rust microservice.
//!
//! This module provides a handler for serving the security policy as HTML or JSON.

use actix_web::{HttpResponse, Responder};

const SECURITY_HTML: &str = r#"
<!DOCTYPE html>
<html lang=\"en\">
<head><meta charset=\"UTF-8\"><title>Security Policy</title></head>
<body>
<h1>Security Policy</h1>
<p>We take security seriously. Our security policy includes:</p>
<ul>
  <li>Regular vulnerability assessments.</li>
  <li>Encryption of sensitive data in transit and at rest.</li>
  <li>Access controls and monitoring.</li>
  <li>Prompt response to security incidents.</li>
</ul>
<p>Contact us to report security issues.</p>
</body>
</html>
"#;

pub async fn security_html() -> impl Responder {
    HttpResponse::Ok().content_type("text/html").body(SECURITY_HTML)
}

pub async fn security_json() -> impl Responder {
    HttpResponse::Ok().json(serde_json::json!({
        "title": "Security Policy",
        "content": "We take security seriously. Our security policy includes:",
        "points": [
            "Regular vulnerability assessments.",
            "Encryption of sensitive data in transit and at rest.",
            "Access controls and monitoring.",
            "Prompt response to security incidents."
        ],
        "contact": "Contact us to report security issues."
    }))
}
