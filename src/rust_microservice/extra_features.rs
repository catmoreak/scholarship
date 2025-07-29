//! Extra Features module for the Rust microservice.
//!
//! This module provides additional feature handlers.

use actix_web::{HttpResponse, Responder};

pub async fn extra_feature() -> impl Responder {
    HttpResponse::Ok().json(serde_json::json!({
        "feature": "extra",
        "description": "This is an extra feature endpoint."
    }))
}
