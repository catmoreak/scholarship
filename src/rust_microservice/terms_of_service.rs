//! Terms of Service module for the Rust microservice.
//!
//! This module provides a handler for serving the terms of service as HTML or JSON.

use actix_web::{HttpResponse, Responder};

const TERMS_HTML: &str = r#"
<!DOCTYPE html>
<html lang=\"en\">
<head><meta charset=\"UTF-8\"><title>Terms of Service</title></head>
<body>
<h1>Terms of Service</h1>
<p>By using this service, you agree to the following terms:</p>
<ul>
  <li>You will use the service in compliance with all applicable laws.</li>
  <li>The service is provided as-is, without warranty.</li>
  <li>We reserve the right to update these terms at any time.</li>
</ul>
<p>Contact us for more information.</p>
</body>
</html>
"#;

pub async fn terms_html() -> impl Responder {
    HttpResponse::Ok().content_type("text/html").body(TERMS_HTML)
}

pub async fn terms_json() -> impl Responder {
    HttpResponse::Ok().json(serde_json::json!({
        "title": "Terms of Service",
        "content": "By using this service, you agree to the following terms:",
        "points": [
            "You will use the service in compliance with all applicable laws.",
            "The service is provided as-is, without warranty.",
            "We reserve the right to update these terms at any time."
        ],
        "contact": "Contact us for more information."
    }))
}
