import React from 'react';

const videos = [
    {
        title: "Aufnahme",
        url: "https://youtu.be/CKSGeMVxetA",
        duration: "01:35:01",
    },
    {
        title: "Timelapse von Aufnahme (automatically created by NextCouldVODs)",
        url: "https://youtu.be/hm8wo6c2oUo",
        duration: "00:03:01",
    },
];

const VideoViewList = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">if_9_html - NEXTCLOUD UI</h1>
            <ul className="space-y-4">
                {videos.map((video, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
                    >

                        <div>
                            <span className="text-lg font-medium text-gray-700 block">{video.title}</span>
                            <span className="text-sm text-gray-500">Duration: {video.duration}</span>
                        </div>
                        <a
                            href={video.url} // Update this to redirect to your desired endpoint
                            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition"
                        >
                            View
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoViewList;
