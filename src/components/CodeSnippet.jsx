import React, { useState } from 'react';
import { Terminal, Copy, Check, Play } from './Icons';

export default function CodeSnippet() {
  const [activeTab, setActiveTab] = useState('engineer');
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const snippets = {
    engineer: {
      file: 'Phelobater.js',
      code: `const engineer = {
  name: "Phelobater Bassem Basha",
  education: "Helwan University (FCI - Information Systems)",
  focus: ["Full-Stack MERN", "Data Engineering"],
  technologies: {
    frontend: ["React.js", "JavaScript ES6+", "Modern CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "PHP"],
    data: ["Python", "SQL", "MongoDB", "Azure Cloud", "Spark"],
  },
  mindset: "Engineered for performance, data integrity, and clean architecture.",
  availableForHire: true
};

export async function solveProblem(challenge) {
  const solution = await engineer.analyze(challenge);
  return solution.optimize().deliver();
}`
    
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 'engineer') {
        setOutput({
          status: 'SUCCESS',
          msg: '✔ Profile compiled successfully. Candidate ready to build scalable, high-impact systems.'
        });
      } else if (activeTab === 'stack') {
        setOutput({
          status: 'DEPLOYED',
          msg: '🚀 Khedma 5&6 Web Platform listening on port 5000. 100+ students & teachers connected.'
        });
      } else {
        setOutput({
          status: 'OPTIMIZED',
          msg: '⚡ Query executed in 14ms across Oracle ERP tables. 0 discrepancies found.'
        });
      }
    }, 600);
  };

  return (
    <div className="code-terminal">
      {/* Terminal Top Bar */}
      <div className="terminal-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="mac-buttons">
            <span className="mac-btn red"></span>
            <span className="mac-btn yellow"></span>
            <span className="mac-btn green"></span>
          </div>
          <div className="terminal-tabs">
            {Object.keys(snippets).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setOutput(null);
                }}
                className={`terminal-tab ${activeTab === key ? 'active' : ''}`}
              >
                {snippets[key].file}
              </button>
            ))}
          </div>
        </div>

        <div className="terminal-actions">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="terminal-run-btn"
            title="Execute Code"
          >
            <Play size={12} />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>
          <button
            onClick={handleCopy}
            className="terminal-copy-btn"
            title="Copy snippet"
          >
            {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Terminal Code Body */}
      <div className="terminal-body">
        {snippets[activeTab].code.split('\n').map((line, idx) => (
          <div key={idx} className="terminal-line">
            <span className="line-number">{idx + 1}</span>
            <span className="line-code">
              {line.includes('const ') || line.includes('import ') || line.includes('export ') || line.includes('function ') || line.includes('SELECT') || line.includes('FROM') || line.includes('WHERE') || line.includes('JOIN') ? (
                <span className="kw">{line}</span>
              ) : line.includes('//') || line.includes('--') ? (
                <span className="comment">{line}</span>
              ) : line.includes('"') || line.includes("'") ? (
                <span className="str">{line}</span>
              ) : (
                line
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Output Console */}
      {output && (
        <div className="terminal-console">
          <Terminal size={14} color="#06b6d4" />
          <span style={{ color: '#06b6d4', fontWeight: 700 }}>[{output.status}]</span>
          <span>{output.msg}</span>
        </div>
      )}
    </div>
  );
}
