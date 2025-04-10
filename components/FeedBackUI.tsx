'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('@/components/ScoreChart'), { ssr: false });
const DownloadPDF = dynamic(() => import('@/components/DownloadPDF'), { ssr: false });

const FeedbackUI = ({ interview, feedback }: { interview: any; feedback: any }) => {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto p-4">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold capitalize text-primary">
          {interview.role} Interview Feedback
        </h1>
        <p className="text-muted-foreground text-sm">{new Date(feedback.createdAt).toLocaleString()}</p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Final Assessment</h2>
        <p className="text-white bg-secondary p-4 rounded-xl shadow-sm">{feedback.finalAssessment}</p>
      </div>

      <div className="flex items-center justify-between bg-card p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold">Total Score</h2>
        <p className="text-white text-xl font-bold">{feedback.totalScore}/100</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Category Scores</h2>
        <Chart data={feedback.categoryScores} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {feedback.categoryScores.map((category: any) => (
            <div
              key={category.name}
              className="bg-muted p-4 rounded-xl shadow"
            >
              <h3 className="font-semibold text-md mb-1">
                {category.name} <span className="text-muted-foreground">({category.score}/25)</span>
              </h3>
              <p className="text-sm text-muted-foreground">{category.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Areas for Improvement</h2>
        <ul className="list-disc list-inside text-muted-foreground bg-secondary p-4 rounded-xl">
          {feedback.areasForImprovement.map((area: string) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end">
        <DownloadPDF feedback={feedback} interview={interview} />
      </div>
    </div>
  );
};

export default FeedbackUI;
