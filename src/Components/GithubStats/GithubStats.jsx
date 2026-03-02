import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar"; // Ensure correct import name
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react"; 
import "./GitHubStats.css";

const GITHUB_USERNAME = "srishtigupta1234";

const GitHubStats = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setRepos(data);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="github-stats-section" id="github">
      <div className="bg-blur-circle"></div>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="sub-heading">Open Source Activity</p>
          <h2 className="main-heading">CODE <span className="highlight">COMMITMENT</span></h2>
          <div className="title-divider"></div>
        </div>

        {/* CONTRIBUTION CALENDAR */}
        <div className="calendar-glass-wrapper" data-aos="zoom-in">
          <div className="calendar-header">
            <Github className="text-cyan-400" size={24} />
            <h3>Contribution History</h3>
          </div>
          <div className="calendar-container">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={14}
              blockMargin={6}
              fontSize={14}
              colorScheme="dark"
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          </div>
        </div>

        {/* RECENT REPOSITORIES */}
        <div className="repos-grid">
          {repos.map((repo, idx) => (
            <div className="repo-glass-card" key={repo.id} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="repo-card-top">
                <Code2 className="repo-icon" size={20} />
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link">
                  <ExternalLink size={16} />
                </a>
              </div>
              <h4 className="repo-name">{repo.name}</h4>
              <p className="repo-desc">{repo.description || "Active development on high-performance university tools."}</p>
              <div className="repo-meta">
                <span className="lang-tag"><div className="dot"></div> {repo.language || "JavaScript"}</span>
                <div className="stats-group">
                  <span><Star size={14} /> {repo.stargazers_count}</span>
                  <span><GitFork size={14} /> {repo.forks_count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;