pipeline {
  agent any

  tools {
    nodejs 'node22' // Use the name you gave earlier
  }

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/Suhailakp/hello-world-react.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Archive Build') {
      steps {
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }

    // Optional Deploy stage
    // stage('Deploy') {
    //   steps {
    //     sh 'cp -r dist/* /var/www/html'
    //   }
    // }
  }
}
