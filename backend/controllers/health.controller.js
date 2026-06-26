exports.healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Paw Feeder AI API is healthy",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
};