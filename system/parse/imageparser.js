/* DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
   Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License.
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and limitations under the License.*/

define(function(require){
	return function(img){
		var canvas = document.createElement("canvas")
		canvas.width = img.width
		canvas.height = img.height
		var ctx = canvas.getContext('2d')
		ctx.drawImage(img, 0, 0)
		var data = ctx.getImageData(0,0,canvas.width, canvas.height)
		return data
	}
})