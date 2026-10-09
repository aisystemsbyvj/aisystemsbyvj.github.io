/* Builds the page from the editable block at the top of index.html.
   You shouldn't need to edit this file. */
(function () {
  "use strict";

  var SITE = {};
  try {
    SITE = JSON.parse(document.getElementById("site-content").textContent);
  } catch (err) {
    // Show a friendly message instead of a blank page if the block has a typo.
    var warn = document.createElement("p");
    warn.className = "content-error";
    warn.setAttribute("role", "alert");
    warn.textContent = "There's a mistake in the content block at the top of index.html " +
      "(usually a missing or extra comma or quote). Details: " + err.message;
    document.getElementById("main").prepend(warn);
    console.error("Content block error:", err);
  }

  // Simple line icons (24x24). Brand marks are simplified, single-colour shapes.
  var ICONS = {
    linkedin:
      '<rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="8" cy="8" r="1.4" fill="currentColor"/>' +
      '<path d="M8 11v6M12 17v-6M12 13.5c0-1.6 1-2.6 2.4-2.6S17 11.9 17 13.5V17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    youtube:
      '<rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<path d="M10 9l5 3-5 3z" fill="currentColor"/>',
    instagram:
      '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>',
    github:
      '<path transform="scale(1.5)" fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>',
    mail:
      '<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<path d="M3.5 6.5L12 13l8.5-6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    arrow:
      '<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    ai:
      '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" fill="currentColor"/>',
    analytics:
      '<path d="M4 20h16M7 16v-4M12 16V7M17 16v-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    money:
      '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<path d="M9 8h6M9 11h6M13 8c1.5 0 2 1.2 2 1.5S14.5 11 13 11h-2.5l4 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    life:
      '<path d="M12 21v-8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M12 13c0-4 2.5-6.5 7-6.5 0 4.5-2.5 6.5-7 6.5zM12 15c0-3.5-2-5.5-6-5.5 0 3.8 2.2 5.5 6 5.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
  };

  function icon(name, className) {
    var span = document.createElement("span");
    span.className = className || "icon";
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" focusable="false">' + (ICONS[name] || "") + "</svg>";
    return span;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // Only allow normal web links and email links.
  function safeUrl(url) {
    if (typeof url !== "string") return "";
    url = url.trim();
    return /^(https?:\/\/|mailto:)/i.test(url) ? url : "";
  }

  function setText(id, value) {
    var node = document.getElementById(id);
    if (node && value) node.textContent = value;
  }

  // ---- Header ----
  setText("name", SITE.name);
  setText("tagline", SITE.tagline);
  var photo = document.getElementById("photo");
  if (photo && SITE.photo) {
    photo.src = SITE.photo;
    photo.alt = SITE.photoAlt || SITE.name || "";
  }

  // ---- Bio ----
  var bio = document.getElementById("bio");
  (SITE.bio || []).slice(0, 3).forEach(function (line) {
    bio.appendChild(el("p", null, line));
  });

  // ---- Follow links ----
  var links = document.getElementById("links");
  (SITE.links || []).forEach(function (link) {
    var li = el("li");
    var url = safeUrl(link.url);
    var item;
    if (url) {
      item = el("a", "link-btn");
      item.href = url;
      item.rel = "noopener me";
      item.target = "_blank";
      item.setAttribute("aria-label", link.label + " (opens in a new tab)");
    } else {
      item = el("div", "link-btn is-placeholder");
    }
    item.appendChild(icon(link.icon, "icon link-icon"));
    item.appendChild(el("span", "link-label", link.label));
    if (url) {
      item.appendChild(icon("arrow", "icon link-arrow"));
    } else {
      item.appendChild(el("span", "badge", "Coming soon"));
    }
    li.appendChild(item);
    links.appendChild(li);
  });

  // ---- Topics ----
  var topics = document.getElementById("topics");
  (SITE.topics || []).forEach(function (topic) {
    var li = el("li", "card topic");
    li.appendChild(icon(topic.icon, "icon topic-icon"));
    li.appendChild(el("h3", null, topic.title));
    li.appendChild(el("p", null, topic.text));
    topics.appendChild(li);
  });

  // ---- Projects ----
  var projects = document.getElementById("projects");
  (SITE.projects || []).forEach(function (project) {
    var li = el("li");
    var url = safeUrl(project.url);
    var card;
    if (url) {
      card = el("a", "card project is-link");
      card.href = url;
      card.rel = "noopener";
      card.target = "_blank";
    } else {
      card = el("div", "card project");
    }
    var head = el("div", "project-head");
    head.appendChild(el("h3", null, project.title));
    if (project.status) head.appendChild(el("span", "badge", project.status));
    card.appendChild(head);
    if (project.text) card.appendChild(el("p", null, project.text));
    li.appendChild(card);
    projects.appendChild(li);
  });

  // ---- Work with me ----
  var work = SITE.work || {};
  setText("work-text", work.text);
  var action = document.getElementById("work-action");
  var email = (work.email || "").trim();
  var btn;
  if (email) {
    btn = el("a", "btn-primary");
    btn.href = "mailto:" + email + (work.emailSubject ? "?subject=" + encodeURIComponent(work.emailSubject) : "");
  } else {
    btn = el("div", "btn-primary is-placeholder");
  }
  btn.appendChild(icon("mail"));
  btn.appendChild(el("span", null, work.buttonLabel || "Email me"));
  if (!email) btn.appendChild(el("span", "badge", "Coming soon"));
  action.appendChild(btn);

  // ---- Footer ----
  setText("year", String(new Date().getFullYear()));
  setText("footer-note", SITE.footerNote);
})();
