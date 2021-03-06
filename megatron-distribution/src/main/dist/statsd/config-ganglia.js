/*
 * Copyright © 2017 Mathieu Carbou (mathieu.carbou@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
{
  port: 8145,
  mgmt_port: 8146,
  keyNameSanitize: true,
  backends: [
    "./backends/console",
    'statsd-ganglia-backend'
  ],

  // console
  console: {
    prettyprint: true
  },

  // Ganglia: https://github.com/jbuchbinder/statsd-ganglia-backend
  ganglia: {
    host: 'localhost',
      port: 8649,
      debug: false
  }
}