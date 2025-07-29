//! API module for the Rust microservice.
//!
//! This module provides a sample API handler.

use actix_web::{HttpResponse, Responder};

pub async fn api_info() -> impl Responder {
    HttpResponse::Ok().json(serde_json::json!({
        "service": "Rust Microservice",
        "version": "1.0.0",
        "status": "running"
    }))
}
