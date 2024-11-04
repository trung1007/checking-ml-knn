# CHECKING MODEL ML-KNN of JAVASCRIPT

Project is about checking and evaluating the model knn based on ml-knn library of javascript

## Table of Contents

- [Introduction](#introduction)
- [System Requirements](#system-requirements)
- [Steps](#steps)
- [Contact Information](#contact-information)

## Introduction

I am working on a project to detect spam SMS messages, where I need a model to classify messages effectively. This project is intended to test and evaluate a KNN model based on JavaScript’s ml-knn library. Key evaluation metrics include accuracy, precision, recall, and F1-score to measure the model's performance comprehensively.

## System Requirements

- **Node.js** >= 14.0
- **npm** >= 6.0

## Steps

Follow these steps to set up and run the project:

```bash
# Clone the repository
git clone https://github.com/trung1007/checking-ml-knn.git

# Navigate to the project directory
cd checking-ml-knn

# Install the ml-knn library
npm install ml-knn

# Parse the data
node parseData.js

# Vectorize the document
node vectorizedDocument.js

# Save the KNN model
node saveKnnModel.js

# Test the saved KNN model
node testSavedKnnModel.js

# Generate and view results
node results.js
```

## Contact Information

- **Email:** trungthanhcao.2003@gmail.com
- **GitHub:** [trung1007](https://github.com/trung1007)
