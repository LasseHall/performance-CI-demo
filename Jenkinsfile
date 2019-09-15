pipeline {
    agent none
    stages {
        stage('Performance Tests') {
            agent {
                docker { image 'saucelabs/speedo' }
            }
            steps {
                sh 'speedo run https://google.com -u ${SAUCE_USERNAME} -k ${SAUCE_ACCESS_KEY} -b ${BUILD_TAG}'
            }
        }
    }
}