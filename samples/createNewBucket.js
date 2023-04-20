/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function main(bucketName = 'my-bucket') {
  // [START storage_create_bucket]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  // The bucket in the sample below will be created in the project asscociated with this client.
  // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html
  const storage = new Storage();

  async function createBucket() {
    // Creates a new bucket in the Asia region with the coldline default storage
    // class. Leave the second argument blank for default settings.
    //
    // For default values see: https://cloud.google.com/storage/docs/locations and
    // https://cloud.google.com/storage/docs/storage-classes

    const [bucket] = await storage.createBucket(bucketName, {
      location: 'ASIA',
      storageClass: 'COLDLINE',
    });

    console.log(`Bucket ${bucket.name} created.`);
  }

  createBucket().catch(console.error);
  // [END storage_create_bucket]
}

main(...process.argv.slice(2));
