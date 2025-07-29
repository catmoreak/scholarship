//! Privacy Policy module for the Rust microservice.
//!
//! This module provides a handler for serving the privacy policy as HTML or JSON.

use actix_web::{HttpResponse, Responder};

const PRIVACY_POLICY_HTML: &str = r#"
<!DOCTYPE html>
<html lang=\"en\">
<head><meta charset=\"UTF-8\"><title>Privacy Policy</title></head>
<body>
<h1>Privacy Policy</h1>
<p>Your privacy is important to us. This policy explains how we handle your data.</p>
<ul>
  <li>We do not sell your personal information.</li>
  <li>We only collect data necessary for service functionality.</li>
  <li>Data is protected using industry-standard security measures.</li>
  <li>You may request deletion of your data at any time.</li>
</ul>
<p>Contact us for more information.</p>
</body>
</html>
"#;

pub async fn privacy_policy_html() -> impl Responder {
    HttpResponse::Ok().content_type("text/html").body(PRIVACY_POLICY_HTML)
}

pub async fn privacy_policy_json() -> impl Responder {
    HttpResponse::Ok().json(serde_json::json!({
        "title": "Privacy Policy",
        "content": "Your privacy is important to us. This policy explains how we handle your data.",
        "points": [
            "We do not sell your personal information.",
            "We only collect data necessary for service functionality.",
            "Data is protected using industry-standard security measures.",
            "You may request deletion of your data at any time."
        ],
        "contact": "Contact us for more information."
    }))
}
