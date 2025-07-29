//! Rank Optimization module for the Rust microservice.
//!
//! This module provides a handler for ranking optimization.

use actix_web::{HttpResponse, Responder};
use serde::Deserialize;

#[derive(Deserialize)]
pub struct RankRequest {
    pub scores: Vec<f64>,
}

pub async fn optimize_rank(req: actix_web::web::Json<RankRequest>) -> impl Responder {
    let mut scores = req.scores.clone();
    scores.sort_by(|a, b| b.partial_cmp(a).unwrap());
    HttpResponse::Ok().json(serde_json::json!({
        "optimized_ranking": scores
    }))
}
